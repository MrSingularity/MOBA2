import SwiftUI

struct ResultsView: View {
    let books: [Book]

    var body: some View {
        List(books) { book in
            NavigationLink(destination: DetailView(book: book)) {
                VStack(alignment: .leading) {
                    Text(book.title).bold()
                    Text(book.author_name?.joined(separator: ", ") ?? "Unbekannter Autor")
                        .font(.subheadline)
                }
            }
        }
        .navigationTitle("Ergebnisse")
    }
}
