import { Component, OnInit } from "@angular/core";
declare var FB;

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {
    this.loginWithFB = () => {
      FB.login(
        response => {
          console.log(response);

          console.log(response.status);
        },
        { scope: "public_profile,email,user_likes" }
      );
    };

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: "1326526600832223",
        cookie: true,
        xfbml: true,
        version: "v3.2"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  ngOnInit() {}

  loginWithFB(): any {
    console.log("in login WIth FB");

    FB.login(
      response => {
        console.log(response);

        console.log(response.status);
      },
      { scope: "public_profile,email,user_likes" }
    );
  }
}
