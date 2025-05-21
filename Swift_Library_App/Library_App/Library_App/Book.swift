struct BookResponse: Decodable {
    let docs: [Book]
}

struct Book: Decodable, Identifiable {
    var id: String { key }
    let title: String
    let author_name: [String]?
    let cover_i: Int?
    let key: String
}
