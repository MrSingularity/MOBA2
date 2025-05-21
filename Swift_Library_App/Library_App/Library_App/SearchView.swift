import SwiftUI

struct SearchView: View {
    @State private var query = ""
    @State private var books: [Book] = []

    var body: some View {
        NavigationView {
            VStack {
                TextField("Suche nach Büchern", text: $query)
                    .padding()
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                Button("Suchen") {
                    BookService().searchBooks(query: query) { results in
                        books = results
                    }
                }
                .padding()

                NavigationLink(destination: ResultsView(books: books)) {
                    Text("Ergebnisse anzeigen")
                }
                .disabled(books.isEmpty)

                Spacer()
            }
            .padding()
            .navigationTitle("Buchsuche")
        }
    }
}
