import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  isLogin(): boolean {
    return localStorage.getItem("userInfo") != null
      && localStorage.getItem("token") != null;
  }

  login(username: string, password: string): Promise<boolean> {
    let urlToken = "/oauth/token?grant_type=password&username=" + username + "&password=" + password;
    let basicAuth = "Basic ddXNlcjp1c2VyMTIz";
    let headers = new Headers({'Authorization': basicAuth});
    let options = new RequestOptions({headers: headers});

    console.log("Menjalankan HTTP Post");

    return this.http.post(urlToken, null, options).toPromise()
      .then(hasil => {
        let data = hasil.json();
        console.log("Access Token : " + data.access_token);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("userInfo", JSON.stringify({username: username, fullname: username}));
        return true;
      })
      .catch(hasil => {
        console.log(hasil);
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }
}
