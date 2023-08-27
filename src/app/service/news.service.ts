import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key = "fe2cebf137f24c5a909dae2c29a788f5";
  constructor(private http: HttpClient) { }
  initSources() {
    return this.http.get("https://newsapi.org/v2/everything?from=2023-07-31&language=en&apikey="+this.api_key)
  }

  getArticalsById(source: String) {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+source +"&language=en&apikey="+this.api_key)
  }

  initArticles() {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&apikey="+this.api_key)
  }
}
