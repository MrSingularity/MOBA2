import SwiftUI

struct ContentView: View {
    @State private var albums: [Album] = []
    @State private var searchTerm: String = "Rolling Stones"

    var body: some View {
        NavigationView {
            List(albums) { album in
                NavigationLink(destination: AlbumDetailView(album: album)) {
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
            }
            .navigationTitle(searchTerm)
            .searchable(text: $searchTerm, prompt: "Search artist")
            .onSubmit(of: .search) {
                loadAlbums(for: searchTerm)
            }
            .onAppear {
                loadAlbums(for: searchTerm)
            }
        }
    }

    func loadAlbums(for artist: String) {
        guard let encoded = artist.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed),
              let url = URL(string: "https://itunes.apple.com/search?term=\(encoded)&entity=album") else {
            print("Ungültiger Suchbegriff")
            return
        }

        URLSession.shared.dataTask(with: url) { data, _, error in
            if let data = data {
                do {
                    let decoded = try JSONDecoder().decode(AlbumResponse.self, from: data)
                    DispatchQueue.main.async {
                        self.albums = decoded.results
                    }
                } catch {
                    print("Fehler beim Decodieren: \(error)")
                }
            } else if let error = error {
                print("Netzwerkfehler: \(error)")
            }
        }.resume()
    }
}
