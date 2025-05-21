import SwiftUI

struct DetailView: View {
    let book: Book

    var body: some View {
        VStack(spacing: 20) {
            if let coverID = book.cover_i {
                AsyncImage(url: URL(string: "https://covers.openlibrary.org/b/id/\(coverID)-L.jpg")) { image in
                    image
                        .resizable()
                        .scaledToFit()
                        .frame(width: 150, height: 200) // Größe anpassen
                } placeholder: {
                    ProgressView()
                }

            }

            Text(book.title).font(.title)
            Text(book.author_name?.joined(separator: ", ") ?? "Unbekannter Autor")

            Spacer()
        }
        .padding()
        .navigationTitle("Details")
    }
}
