import SwiftUI

struct ContentView: View {
    @State private var albums: [Album] = []

    var body: some View {
        NavigationView {
            List(albums) { album in
                HStack {
                    AsyncImage(url: URL(string: album.artworkUrl60)) { image in
                        image
                            .resizable()
                            .frame(width: 60, height: 60)
                            .cornerRadius(8)
                    } placeholder: {
                        ProgressView()
                            .frame(width: 60, height: 60)
                    }

                    Text(album.collectionName)
                        .font(.body)
                        .padding(.leading, 8)
                }
                .padding(.vertical, 4)
            }
            .navigationTitle("Rolling Stones")
        }
        .onAppear {
            loadAlbums()
        }
    }

    func loadAlbums() {
        if let url = Bundle.main.url(forResource: "stones", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let decoded = try JSONDecoder().decode(AlbumResponse.self, from: data)
                albums = decoded.results
            } catch {
                print("Fehler beim Laden der JSON: \(error)")
            }
        } else {
            print("stones.json nicht gefunden.")
        }
    }
}
