import Foundation

class BookService {
    func searchBooks(query: String, completion: @escaping ([Book]) -> Void) {
        let formattedQuery = query.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let urlString = "https://openlibrary.org/search.json?q=\(formattedQuery)&limit=20"
        
        guard let url = URL(string: urlString) else { return }

        URLSession.shared.dataTask(with: url) { data, _, _ in
            guard let data = data else { return }
            do {
                let decoded = try JSONDecoder().decode(BookResponse.self, from: data)
                DispatchQueue.main.async {
                    completion(decoded.docs)
                }
            } catch {
                print("Error decoding: \(error)")
            }
        }.resume()
    }
}
