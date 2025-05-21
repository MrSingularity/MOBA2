import SwiftUI

struct AlbumDetailView: View {
    let album: Album
    @State private var songs: [LookupResult] = []

    var body: some View {
        List {
            Section(header: Text("Album")) {
                HStack {
                    AsyncImage(url: URL(string: album.artworkUrl60)) { image in
                        image
                            .resizable()
                            .frame(width: 100, height: 100)
                            .cornerRadius(10)
                    } placeholder: {
                        ProgressView()
                            .frame(width: 100, height: 100)
                    }
                    Text(album.collectionName)
                        .font(.headline)
                        .padding(.leading, 8)
                }
            }

            Section(header: Text("Songs")) {
                ForEach(songs.filter { $0.wrapperType == "track" }) { song in
                    Text(song.trackName ?? "Unbenannter Song")
                }
            }
        }
        .navigationTitle("Details")
        .onAppear {
            loadSongs()
        }
    }

    func loadSongs() {
        guard let url = URL(string: "https://itunes.apple.com/lookup?id=\(album.collectionId)&entity=song") else {
            return
        }

        let task = URLSession.shared.dataTask(with: url) { data, _, error in
            if let data = data {
                do {
                    let decoded = try JSONDecoder().decode(LookupResponse.self, from: data)
                    DispatchQueue.main.async {
                        self.songs = decoded.results
                    }
                } catch {
                    print("Fehler beim Laden der Songs: \(error)")
                }
            }
        }
        task.resume()
    }
}
