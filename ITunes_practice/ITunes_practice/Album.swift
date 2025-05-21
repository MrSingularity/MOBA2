import Foundation

struct AlbumResponse: Codable {
    let results: [Album]
}

struct Album: Codable, Identifiable {
    let collectionId: Int
    let collectionName: String
    let artworkUrl60: String

    var id: Int { collectionId }
}
