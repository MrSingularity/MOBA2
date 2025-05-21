import SwiftUI

struct ContentView: View {
    // Größe des Spielfelds
    let rows = 5
    let cols = 5

    // Zustände für das Spielfeld: alt und neu
    @State private var oldBoard: [[Int]]
    @State private var newBoard: [[Int]]

    // Initialisierung der Boards mit zufälligen 0 und 1
    init() {
        let initialBoard = ContentView.initializeBoard(rows: 5, cols: 5)
        _oldBoard = State(initialValue: initialBoard)
        _newBoard = State(initialValue: initialBoard)
    }

    // Funktion zum Initialisieren des Boards
    static func initializeBoard(rows: Int, cols: Int) -> [[Int]] {
        var board = [[Int]]()
        for _ in 0..<rows {
            var row = [Int]()
            for _ in 0..<cols {
                row.append(Int(arc4random() % 2)) // Zufällig 0 oder 1
            }
            board.append(row)
        }
        return board
    }

    // Funktion zur Anzeige des Boards als Text
    func printBoard(_ board: [[Int]]) -> String {
        var boardString = ""
        for row in board {
            boardString += row.map { $0 == 0 ? " " : "■" }.joined(separator: " ") + "\n"
        }
        return boardString
    }

    // Zählt die lebenden Nachbarn einer Zelle
    func countAliveNeighbors(board: [[Int]], r: Int, c: Int) -> Int {
        let directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        var count = 0

        for (dr, dc) in directions {
            let nr = r + dr
            let nc = c + dc

            if nr >= 0 && nr < rows && nc >= 0 && nc < cols {
                count += board[nr][nc]
            }
        }

        return count
    }

    // Berechnet die nächste Generation des Spiels
    func nextGeneration(oldBoard: [[Int]]) -> [[Int]] {
        var newBoard = oldBoard

        for r in 0..<rows {
            for c in 0..<cols {
                let aliveNeighbors = countAliveNeighbors(board: oldBoard, r: r, c: c)
                if oldBoard[r][c] == 1 {
                    if aliveNeighbors < 2 || aliveNeighbors > 3 {
                        newBoard[r][c] = 0
                    }
                } else {
                    if aliveNeighbors == 3 {
                        newBoard[r][c] = 1
                    }
                }
            }
        }

        return newBoard
    }

    var body: some View {
        VStack(spacing: 20) {
            Text("Altes Board:")
                .font(.headline)
            Text(printBoard(oldBoard))
                .font(.system(.body, design: .monospaced))

            Text("Neues Board:")
                .font(.headline)
            Text(printBoard(newBoard))
                .font(.system(.body, design: .monospaced))

            Button(action: {
                let next = nextGeneration(oldBoard: oldBoard)
                oldBoard = newBoard
                newBoard = next
            }) {
                Text("Nächste Generation")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

