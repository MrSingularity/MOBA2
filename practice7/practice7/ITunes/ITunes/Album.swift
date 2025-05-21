import Foundation

struct AlbumResponse: Codable {
    let results: [Album]
}

struct Album: Codable, Identifiable {
    let collectionName: String
    let artworkUrl60: String

    var id: String { collectionName + artworkUrl60 }
}
