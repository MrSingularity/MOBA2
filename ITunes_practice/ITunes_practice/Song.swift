import Foundation

struct LookupResponse: Codable {
    let results: [LookupResult]
}

struct LookupResult: Codable, Identifiable {
    let wrapperType: String
    let trackName: String?
    let trackNumber: Int?
    let id = UUID()
}
