(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n<p>\r\n<h1>Objective</h1>\r\nThe only suggestive measure to COVID-19 till date has been Social Distancing. \r\nWe look forward to implementing a visionary model that would proctor gatherings as well as alert the respective authority/user. \r\nTo add on we would make it user friendly we plan to deploy the same in a PWA alongside an Android Application with some added features which may turn out to be helpful these days such as route optimization \r\n(for the people who needs to go out inevitably) based on affected heat map and crowdsourcing, real-time tracking of the location of affected areas and timely alerts and notification push. The detailed view is as follows:\r\n<br>\r\n<br>\r\n<h1>Computer Vision Model</h1>\r\nThe proposed application will use TensorFlow’s Object Detection Model to detect crowd gatherings. \r\nUsing the object detection API, we can detect the number of people in an image and if that count is greater than some threshold then the corresponding authorities will be informed along with the location. \r\nTensorFlow’s object detection API is already pre-trained so there is no overhead of creating a separate dataset for training and since the dataset is already trained it can be used to detect objects (persons) from live video. \r\nHowever, handling videos will become very bulky so we will use snapshots of images every 30secs from the video feed. For both the android, and web app version, the photograph will be analyzed in the server and if the result is above the threshold, a warning would be set off.\r\n<br>\r\n<br>\r\n<h1>WebApp</h1>\r\nThe website will allow users to upload their video from the CCTV from where we will take two frames per minute i.e. 1 in every 30 seconds. \r\nThe images will be sent to the backend for analysis and after risk assessment, the heat map will be updated according to the nature of the crowd. \r\nA notification will be sent to the users using the Android App regarding a possible crowd in the location on a real-time basis. \r\nUsing constant video clips will allow the government agencies to track the overall situation throughout the course of a day. \r\nAlso, the user can click a photograph and send it for risk assessment along with its location. \r\n<br>\r\nTo make the webapp complete there will be separate sections for real-time infected, recovered and death data across India and basic knowledge on Corona virus and its symptoms.\r\n\r\nIn addition to this to keep a check on the faulty submission of image by users we will be using a token system. \r\nEach time a user registers he/she will be given 5 virtual tokens. Every time a correct submission is done 1 token will be credited to the user and in case of faulty submission 1 token will be debited. \r\nOnce the token runs out the user will be blacklisted and cannot upload any more images.\r\n<br>\r\n<br>\r\n<h1>Android App</h1>\r\nThe application will allow users to take photographs using their mobile camera to capture scenes where there is a crowd of people. \r\nThen the photograph will be analyzed using a machine learning model to understand the nature of the crowd (size, distance within) and then after risk assessment, \r\na warning will be set off and the location and nature of the crowd will be uploaded to our servers and all the devices who are using our system will get notified about a possible crowd in a particular location on a real-time basis. This could also help the administration and other govt agencies to trace people and their movement if and when required.\r\n<br>\r\n<br>\r\n<h1>Future Scope</h1>\r\nIn the future, we plan to scrape data from social networking sites like Facebook, Twitter and use Natural Language Processing \r\nto gather information regarding crowd gatherings. If those tweets/posts contain images/videos they can be processed in the same way. \r\nIn this way a dataset will be created of past gatherings along with the location of the gathering and number of people present. \r\nUsing the already available data of location of corona virus patients the areas which might be affected next can be detected.\r\n<br><br><br>\r\n<div style=\"text-align: left;\">\r\n<h1>Team</h1>\r\n<ul>\r\n<li>Srijan Nag</li>\r\n<br>\r\n<li>Akash Roy</li>\r\n<br>\r\n<li>Amrita Das</li>\r\n<br>\r\n<li>Sayak Banerjee</li>\r\n<br>\r\n<li>Subhayan Bhattacharya</li>\r\n<br>\r\n<li>Aishik Deb</li>\r\n<br>\r\n<li>Suranjan Daw</li>\r\n<br>\r\n<li>Souhardya Adhikary</li>\r\n</ul>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container\">\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row cwsf-footer\">\r\n    <div class=\"col-sm-4 tag\">\r\n        Be Safe From the Crowd\r\n    </div>\r\n    <div class=\"col-sm-4 copyright\">\r\n        © Team Visionary COVID-19 Team.\r\n    </div>\r\n    <div class=\"col-sm-4 acronym\">\r\n        CWSF\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"yellow-bar\">\r\n</div>\r\n<div class=\"row header-first\">\r\n    <div class=\"col-sm-2\">\r\n        <img class=\"logo\" src=\"../../assets/Final_Logo.jpeg\">\r\n    </div>\r\n    <div class=\"col-sm-10\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 header-links\">\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" (click) = \"navigateAbout()\">\r\n                            About COVID-19\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" (click) = \"navigateHeatmap()\">\r\n                            See Heat-Map\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" (click) = \"nagigateSymptoms()\">\r\n                            Know COVID symptoms\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" (click) = \"navigateHome()\">\r\n                            See Cases Across India\r\n                        </a>\r\n                    </li>\r\n                    <li  class=\"upload\">\r\n                        <a href=\"javascript:void(0)\" (click) = \"navigateUpload()\">\r\n                            Upload Image\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <button *ngIf=\"inboolean\" class=\"header-btn\" (click) = \"navigateLogin()\">Sign In</button>\r\n                <button *ngIf=\"!inboolean\" class=\"header-btn\" (click) = \"logout()\">Sign Out</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"header-title\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4\">\r\n            {{header}}\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <span  *ngIf=\"tokenflag\">Tokens Present : {{tokennumber}}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/heatmap/heatmap.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/heatmap/heatmap.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"userloader\" [config]=\"{fullScreenBackdrop: true }\"></ngx-loading>\r\n<div #mapContainer id=\"map\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"userloader\" [config]=\"{fullScreenBackdrop: true }\"></ngx-loading>\r\n<div *ngIf = \"errorFlag\">\r\n    <div class=\"alert\">\r\n      <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> \r\n        {{errorMsg}}\r\n    </div>\r\n</div>\r\n<div class=\"loginUI\">\r\n    <div class=\"row\">\r\n        <div class=\"title col-sm-12\" style=\"text-align: center;\">\r\n            Please enter your credentials to login\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <form class=\"form-horizontal col-sm-12\" style=\"text-align: center;\">\r\n            <div class=\"form-group col-sm-12\">\r\n                <div class=\"row\">\r\n                    <label class=\"control-label col-sm-2\" for=\"phoneNumber\">Phone Number:</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phoneNumber\" placeholder=\"Enter Phone Number\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-sm-12\">\r\n                <div class=\"row\">\r\n                    <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n                    <div class=\"col-sm-8\">          \r\n                    <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-sm-12\">        \r\n                <div class=\"col-sm-offset-2 col-sm-12 form-login\">\r\n                <button (click) = \"loginUser()\" class=\"btn btn-warning login-button\">Login</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group register_redirect\">\r\n                <div class=\"col-sm-12\">\r\n                    Not registered yet? &nbsp;<a href=\"javascript:void(0);\" (click)=\"navigateRegister()\">Click here to Register</a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainpage/mainpage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"!fetchGroupDataDone\" [config]=\"{fullScreenBackdrop: true }\"></ngx-loading>\r\n<div *ngIf = \"fetchGroupDataDone\">\r\n    <div class=\"row india-map-desktop\">\r\n        <div class=\"col-sm-6\">\r\n            <fusioncharts width=\"900\" height=\"530\" type=\"india\" [dataSource]=\"dataSource\" (initialized) = \"initializedMap($event)\">\r\n            </fusioncharts>\r\n        </div>\r\n        <div class=\"col-sm-6 data-table\">\r\n            <table class=\"table table-striped table-bordered\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>State Name</th>\r\n                        <th>Total Cases</th>\r\n                        <th>Active Cases</th>\r\n                        <th>Death Cases</th>\r\n                        <th>Recovered Cases</th>\r\n                    </tr>\r\n                    <tr *ngFor = \"let State of stateFullData\">\r\n                        <td>{{State.name}}</td>\r\n                        <td>{{State.infected}}</td>\r\n                        <td>{{State.active}}</td>\r\n                        <td>{{State.deaths}}</td>\r\n                        <td>{{State.recovered}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"row india-map-mobile\">\r\n        <div class=\"col-sm-6\">\r\n            <fusioncharts width=\"500\" height=\"530\" type=\"india\" [dataSource]=\"dataSource\" (initialized) = \"initializedMap($event)\">\r\n            </fusioncharts>\r\n        </div>\r\n        <div class=\"col-sm-6 data-table\">\r\n            <table class=\"table table-striped table-bordered\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>State Name</th>\r\n                        <th>Total Cases</th>\r\n                        <th>Active Cases</th>\r\n                        <th>Death Cases</th>\r\n                        <th>Recovered Cases</th>\r\n                    </tr>\r\n                    <tr *ngFor = \"let State of stateFullData\">\r\n                        <td>{{State.name}}</td>\r\n                        <td>{{State.infected}}</td>\r\n                        <td>{{State.active}}</td>\r\n                        <td>{{State.deaths}}</td>\r\n                        <td>{{State.recovered}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"userloader\" [config]=\"{fullScreenBackdrop: true }\"></ngx-loading>\r\n<div class=\"error\" *ngIf = \"errorflag\">\r\n  <div class=\"alert\" style=\"text-align: center;\">\r\n    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> \r\n    <div>{{errorMsg}}</div>\r\n  </div>\r\n</div>\r\n<div class = \"requestOtp\" *ngIf = \"!otpValidate && !registerflag\">\r\n  <div class=\"row\">\r\n    <div class=\"title col-sm-12\" style=\"text-align: center;\">\r\n      Please enter your Email ID to receive OTP for registration\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <form class=\"form-horizontal col-sm-12\" style=\"text-align: center;\">\r\n      <div class=\"form-group col-sm-12\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\">Email ID:</label>\r\n          <div class=\"col-sm-8\">\r\n              <input class=\"form-control\" type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-12 form-register\">\r\n          <button (click) = \"requestOtp()\" class=\"btn btn-warning register-button\">Send OTP</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class = \"validateOtp\" *ngIf = \"otpValidate && !registerflag\">\r\n  <div class=\"row\">\r\n    <div class=\"title col-sm-12\" style=\"text-align: center;\">\r\n      Please enter OTP received in you email ID\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <form class=\"form-horizontal col-sm-12\" style=\"text-align: center;\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\">Enter OTP:</label>\r\n          <div class=\"col-sm-8\">\r\n              <input class=\"form-control\" type=\"email\" [(ngModel)]=\"otp\" placeholder=\"Enter OTP\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-12 form-register\">\r\n          <button (click) = \"validateOtp()\" class=\"btn btn-warning register-button\">Validate OTP</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class = \"registerUser\" *ngIf = \"registerflag\">\r\n  <div class=\"row\">\r\n    <div class=\"title col-sm-12\" style=\"text-align: center;\">\r\n      Please enter Credentials to Register\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <form class=\"form-horizontal col-sm-12\" style=\"text-align: center;\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\">Email ID:</label>\r\n          <div class=\"col-sm-8\">\r\n              <input class=\"form-control\" type=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\" for=\"name\">Phone:</label>\r\n          <div class=\"col-sm-8\">\r\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phonenumber\" placeholder=\"Enter Phone\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n          <div class=\"col-sm-8\">          \r\n            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <label class=\"control-label col-sm-2\" for=\"pwd\">Confirm Password:</label>\r\n          <div class=\"col-sm-8\">          \r\n              <input class=\"form-control\" type=\"password\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n          <div class=\"col-sm-offset-2 col-sm-12\">\r\n              <button (click) = \"registerUser()\" class=\"btn btn-warning register-button\">Register</button>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/symptoms/symptoms.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/symptoms/symptoms.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <br>\r\n        <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.\r\n        These symptoms may appear <b>2-14 days after exposure</b> (based on the incubation period of MERS-CoV viruses).<br />\r\n        <div>\r\n        <ul>\r\n        <li>Fever</li>\r\n        <li>Cough</li>\r\n        <li>Shortness of breath</li>\r\n        <li>Muscle aches</li>\r\n        <li>Sore throat</li>\r\n        <li>Unexplained loss of taste or smell</li>\r\n        <li>Diarrhea</li>\r\n        <li>Headache</li>\r\n        </ul></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p>\r\n        In rare cases, COVID-19 can lead to severe respiratory problems, kidney failure or death.\r\n        If you have a fever or any kind of respiratory difficulty such as coughing or shortness of breath, \r\n        call your doctor or a health care provider and explain your symptoms over the phone before going to the doctor’s office, urgent care facility or emergency room.\r\n        </p>\r\n        <p style=\"text-align:center\">\r\n            <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-mobile.png\" alt=\"symptom\" style=\"width:500px\">\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/testing/testing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testing/testing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"userloader\" [config]=\"{fullScreenBackdrop: true }\"></ngx-loading>\r\n<div *ngIf = \"errorMsg\">\r\n    <div class=\"alert\">\r\n      <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> \r\n      <strong>Sorry!</strong> Please clear cache and allow device location.\r\n    </div>\r\n</div>\r\n<div *ngIf = \"successMsg\">\r\n  <div class=\"alert-success\">\r\n    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> \r\n    No of People Detected: {{successMsg}}\r\n  </div>\r\n</div>\r\n<div *ngIf = \"tokenFlag\"> \r\n  <div class=\"about\">\r\n    Help the community to stay safe by providing information regarding gathering of crowds .\r\n  </div>\r\n  <div class=\"image-upload\">\r\n    <div class=\"input-title\">Please select an Image to Upload</div>\r\n\r\n    <input class=\"image-input\" (change)=\"picked($event,1)\" type=\"file\"  accept=\"video/mp4,image/*\">\r\n\r\n    <br>\r\n    <hr>\r\n\r\n    <img [src]=\"imgURL\" class=\"image-preview\" height=\"200\" *ngIf=\"imgURL\">\r\n    <div *ngIf = \"videoFlag\" class=\"video\">Video has been successfully uploaded. Press Submit</div>\r\n\r\n    <br>\r\n    <button [disabled]=\"submitEnable\" class=\"butoncus_sig image-submit\" id=\"dnext\" (click)=\"addPictures()\">Submit</button>\r\n  </div>\r\n  <div class=\"disclaimer\">\r\n    <span>NOTE:</span> Please note that submission of inappropriate images will lead to deduction in number of tokens.\r\n  </div>\r\n</div>\r\n<div class=\"notoken\" *ngIf = \"!tokenFlag\">\r\n  Since you have exhausted your tokens you will not be able to upload images any further.\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #FFFFD5;\n  text-align: left;\n  color: black;\n  padding: 15px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  text-align: center;\n}\n\nul {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxBa2FzaFxcT25lRHJpdmVcXERlc2t0b3BcXENyb3dkU2FmZVxcQ3Jvd2RTYWZlXFxDb3ZpZDE5L3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMseUJBQUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUNBRjs7QURFQTtFQUVDLGtCQUFBO0FDQUQ7O0FERUE7RUFFQyxlQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkQ1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuaDFcclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG51bFxyXG57XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG51bCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");



let AboutComponent = class AboutComponent {
    constructor(subscribeservice) {
        this.subscribeservice = subscribeservice;
    }
    ngOnInit() {
        this.subscribeservice.setHeader('About The Team');
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__["SubscribeService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heatmap/heatmap.component */ "./src/app/heatmap/heatmap.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symptoms/symptoms.component */ "./src/app/symptoms/symptoms.component.ts");











const routes = [
    { path: '', redirectTo: 'heatmap', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'home', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"] },
    { path: 'heatmap', component: _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_6__["HeatmapComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'testing', component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_8__["TestingComponent"] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"] },
    { path: 'symptoms', component: _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_10__["SymptomsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Covid19';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm2015/ngx-loading.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusionmaps_fusioncharts_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! fusionmaps/fusioncharts.maps */ "./node_modules/fusionmaps/fusioncharts.maps.js");
/* harmony import */ var fusionmaps_fusioncharts_maps__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(fusionmaps_fusioncharts_maps__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! fusioncharts/maps/fusioncharts.india */ "./node_modules/fusioncharts/maps/fusioncharts.india.js");
/* harmony import */ var fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./heatmap/heatmap.component */ "./src/app/heatmap/heatmap.component.ts");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./symptoms/symptoms.component */ "./src/app/symptoms/symptoms.component.ts");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");

























angular_fusioncharts__WEBPACK_IMPORTED_MODULE_16__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_15__, fusionmaps_fusioncharts_maps__WEBPACK_IMPORTED_MODULE_17__, fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_19__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_13__["MainpageComponent"],
            _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_20__["HeatmapComponent"],
            _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_21__["SymptomsComponent"],
            _testing_testing_component__WEBPACK_IMPORTED_MODULE_22__["TestingComponent"],
            _upload_upload_component__WEBPACK_IMPORTED_MODULE_23__["UploadComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([]),
            ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            angular_fusioncharts__WEBPACK_IMPORTED_MODULE_16__["FusionChartsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cwsf-footer {\n  background-color: #004C6C;\n  padding: 6px;\n  height: 40px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n.cwsf-footer .tag {\n  color: #FFCB05;\n  font-weight: 700;\n  font-size: 18px;\n}\n.cwsf-footer .acronym {\n  font-weight: 700;\n  color: #ffffff;\n  font-size: 18px;\n  text-align: right;\n}\n.cwsf-footer .copyright {\n  color: #ffffff;\n  text-align: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQWthc2hcXE9uZURyaXZlXFxEZXNrdG9wXFxDcm93ZFNhZmVcXENyb3dkU2FmZVxcQ292aWQxOS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jd3NmLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRDNkM7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGFne1xyXG4gICAgICAgIGNvbG9yOiAjRkZDQjA1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmFjcm9ueW17XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0e1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCIuY3dzZi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0QzZDO1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN3c2YtZm9vdGVyIC50YWcge1xuICBjb2xvcjogI0ZGQ0IwNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmN3c2YtZm9vdGVyIC5hY3JvbnltIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY3dzZi1mb290ZXIgLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yellow-bar {\n  background-color: #FFCB05;\n  height: 5px;\n}\n\n.header-first {\n  margin-bottom: 10px;\n}\n\n.header-first .logo {\n  padding-top: 5px;\n  padding-left: 10px;\n  width: 120px;\n  height: 90px;\n}\n\n.header-first .header-links {\n  padding-top: 33px;\n}\n\n.header-first .header-links ul {\n  list-style: none;\n}\n\n.header-first .header-links ul li {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.header-first .header-links ul li a {\n  font-weight: 600;\n  color: #004C6C;\n}\n\n.header-first .header-links ul .upload {\n  background-color: #FFCB05;\n  margin-left: 10px;\n}\n\n.header-first .header-btn {\n  min-width: 80px;\n  min-height: 34px;\n  float: right;\n  margin-right: 16px;\n  margin-top: 24px;\n  background-color: #FFCB05;\n  border: none;\n  border-radius: 8%;\n  font-weight: 700;\n  color: #004C6C;\n}\n\n.header-title {\n  height: 40px;\n  padding: 5px 10px;\n  margin-bottom: 20px;\n  background-color: #FFCB05;\n  color: #004C6C;\n  font-weight: 700;\n  text-align: center;\n}\n\n.header-title span {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQWthc2hcXE9uZURyaXZlXFxEZXNrdG9wXFxDcm93ZFNhZmVcXENyb3dkU2FmZVxcQ292aWQxOS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHUjs7QURESTtFQUNJLGlCQUFBO0FDR1I7O0FERlE7RUFDSSxnQkFBQTtBQ0laOztBREhZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNLaEI7O0FESmdCO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDTXBCOztBREhZO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0toQjs7QURESTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHUjs7QURBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREZJO0VBQ0ksWUFBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3ctYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0IwNTtcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcbi5oZWFkZXItZmlyc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbGlua3N7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMzcHg7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDRDNkM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVwbG9hZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItYnRue1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQjA1O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4JTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA0QzZDO1xyXG4gICAgfVxyXG59XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQjA1O1xyXG4gICAgY29sb3I6ICMwMDRDNkM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgc3BhbntcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn0iLCIueWVsbG93LWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XG4gIGhlaWdodDogNXB4O1xufVxuXG4uaGVhZGVyLWZpcnN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oZWFkZXItZmlyc3QgLmxvZ28ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLmhlYWRlci1maXJzdCAuaGVhZGVyLWxpbmtzIHtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG59XG4uaGVhZGVyLWZpcnN0IC5oZWFkZXItbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhlYWRlci1maXJzdCAuaGVhZGVyLWxpbmtzIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5oZWFkZXItZmlyc3QgLmhlYWRlci1saW5rcyB1bCBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDRDNkM7XG59XG4uaGVhZGVyLWZpcnN0IC5oZWFkZXItbGlua3MgdWwgLnVwbG9hZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmhlYWRlci1maXJzdCAuaGVhZGVyLWJ0biB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA0QzZDO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0IwNTtcbiAgY29sb3I6ICMwMDRDNkM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXItdGl0bGUgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(subscribeservice, router, route) {
        this.subscribeservice = subscribeservice;
        this.router = router;
        this.route = route;
        this.inboolean = true;
        this.header = "About the Project";
        this.userLogin = false;
        this.tokenflag = false;
    }
    ngOnInit() {
        this.subscribeservice.header.subscribe((title) => {
            this.header = title;
        });
        this.subscribeservice.token.subscribe((tok) => {
            this.tokennumber = tok;
        });
        this.subscribeservice.userData.subscribe((user) => {
            // console.log(user);
            if (user != null) {
                this.inboolean = false;
                this.tokenflag = true;
            }
        });
    }
    logout() {
        this.subscribeservice.setUserData(null);
        this.inboolean = true;
    }
    navigateLogin() {
        this.router.navigate(['../login'], { relativeTo: this.route }).catch();
    }
    navigateUpload() {
        this.router.navigate(['../upload'], { relativeTo: this.route }).catch();
    }
    navigateHome() {
        this.router.navigate(['../home'], { relativeTo: this.route }).catch();
    }
    navigateAbout() {
        this.router.navigate(['../about'], { relativeTo: this.route }).catch();
    }
    navigateHeatmap() {
        this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
    }
    nagigateSymptoms() {
        this.router.navigate(['../symptoms'], { relativeTo: this.route }).catch();
    }
    signOut() {
        this.subscribeservice.setUserData(null);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__["SubscribeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/heatmap/heatmap.component.scss":
/*!************************************************!*\
  !*** ./src/app/heatmap/heatmap.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 500px;\n  width: 80%;\n  -webkit-transform: translateX(12%);\n          transform: translateX(12%);\n  margin-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhdG1hcC9DOlxcVXNlcnNcXEFrYXNoXFxPbmVEcml2ZVxcRGVza3RvcFxcQ3Jvd2RTYWZlXFxDcm93ZFNhZmVcXENvdmlkMTkvc3JjXFxhcHBcXGhlYXRtYXBcXGhlYXRtYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYXRtYXAvaGVhdG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWF0bWFwL2hlYXRtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufSIsIiNtYXAge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogODAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIlKTtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/heatmap/heatmap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/heatmap/heatmap.component.ts ***!
  \**********************************************/
/*! exports provided: HeatmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapComponent", function() { return HeatmapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");




let HeatmapComponent = class HeatmapComponent {
    constructor(subscribeservice, appservice) {
        this.subscribeservice = subscribeservice;
        this.appservice = appservice;
        this.userloader = false;
        this.heatMapData = [];
        this.errorMsg = false;
        this.userloader = true;
        this.appservice.gatherHeatMapDataApi()
            .then((response) => {
            this.userloader = false;
            if (response.status == 200) {
                response.body.forEach((data) => {
                    let tempData = {
                        location: new google.maps.LatLng(Number(data['Latitude']), Number(data['Longitude'])),
                        weight: 30
                    };
                    this.heatMapData.push(tempData);
                    this.appservice.getPosition()
                        .then(pos => {
                        this.latitude = `${pos.lat}`;
                        this.longitude = `${pos.lng}`;
                        this.userlocation = new google.maps.LatLng(Number(this.latitude), Number(this.longitude));
                        this.ngInitManual();
                    }).catch((err) => {
                        this.userlocation = new google.maps.LatLng(22.5726, 88.3639);
                        this.ngInitManual();
                        console.log(err);
                    });
                });
            }
        }).catch((err) => {
            this.userloader = false;
            console.log(err);
        });
    }
    ngInitManual() {
        this.subscribeservice.setHeader('Heat Map of Infected Regions Across India');
        this.mapInitializer();
    }
    mapInitializer() {
        // this.map = new google.maps.Map(this.gmap.nativeElement, 
        // this.mapOptions);
        // this.marker.setMap(this.map);
        var map = new google.maps.Map(document.getElementById('map'), {
            center: this.userlocation,
            zoom: 9,
            mapTypeId: 'roadmap'
        });
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: this.heatMapData
        });
        heatmap.setMap(map);
    }
};
HeatmapComponent.ctorParameters = () => [
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__["SubscribeService"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapContainer', { static: false })
], HeatmapComponent.prototype, "gmap", void 0);
HeatmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heatmap',
        template: __webpack_require__(/*! raw-loader!./heatmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/heatmap/heatmap.component.html"),
        styles: [__webpack_require__(/*! ./heatmap.component.scss */ "./src/app/heatmap/heatmap.component.scss")]
    })
], HeatmapComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  padding: 4px 15px;\n  background-color: aliceblue;\n  margin-bottom: 13px;\n}\n\n.login form {\n  margin-bottom: 200px;\n  margin-left: 14%;\n}\n\n.login form .form-login {\n  text-align: center;\n}\n\n.login form .form-login .login-button {\n  min-width: 80px;\n  min-height: 34px;\n  background-color: #FFCB05;\n  border: none;\n  border-radius: 8%;\n  font-weight: 700;\n  color: #004C6C;\n}\n\n.login form .register_redirect {\n  text-align: center;\n}\n\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n}\n\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.closebtn:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBa2FzaFxcT25lRHJpdmVcXERlc2t0b3BcXENyb3dkU2FmZVxcQ3Jvd2RTYWZlXFxDb3ZpZDE5L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FEQ1E7RUFDSSxrQkFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFaEI7O0FEQ1E7RUFDSSxrQkFBQTtBQ0NaOztBREdBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcbi5sb2dpbntcclxuICAgIGZvcm17XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0JTtcclxuICAgICAgICAuZm9ybS1sb2dpbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubG9naW4tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNEM2QztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVnaXN0ZXJfcmVkaXJlY3R7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFsZXJ0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VidG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9IiwiLnRpdGxlIHtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmxvZ2luIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE0JTtcbn1cbi5sb2dpbiBmb3JtIC5mb3JtLWxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luIGZvcm0gLmZvcm0tbG9naW4gLmxvZ2luLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0IwNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4JTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDRDNkM7XG59XG4ubG9naW4gZm9ybSAucmVnaXN0ZXJfcmVkaXJlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvc2VidG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZWJ0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(appservice, subscribeservice, router, route) {
        this.appservice = appservice;
        this.subscribeservice = subscribeservice;
        this.router = router;
        this.route = route;
        this.phoneNumber = '';
        this.password = '';
        this.userloader = false;
        this.errorFlag = false;
        this.errorMsg = "";
    }
    ngOnInit() {
        this.subscribeservice.setHeader('Login Portal');
    }
    loginUser() {
        if (this.phoneNumber != "" && this.password != "") {
            if (this.phoneNumber.length != 10) {
                alert("Phone number should be 10 digits");
                this.phoneNumber = "";
            }
            else {
                let payload;
                payload = {
                    "user": this.phoneNumber,
                    "password": Object(js_sha256__WEBPACK_IMPORTED_MODULE_5__["sha256"])(this.password)
                };
                this.userloader = true;
                this.errorFlag = false;
                this.errorMsg = "";
                this.appservice
                    .loginApi(payload).then((response) => {
                    console.log(response);
                    this.userloader = false;
                    if (response.status == 200) {
                        this.subscribeservice.setUserData(response.body['Name']);
                        this.subscribeservice.setToken(response.body['Token']);
                        this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
                    }
                    else if (response.status == 204) {
                        this.errorFlag = true;
                        this.errorMsg = "Authentication Failed";
                    }
                }).catch((err) => {
                    this.userloader = false;
                    console.log(err);
                    this.userloader = false;
                    this.errorMsg = "Authentication Failed";
                    this.errorFlag = true;
                });
                this.clearfields();
            }
        }
        else {
            alert("All fields are mandatory.");
        }
    }
    clearfields() {
        this.phoneNumber = '';
        this.password = '';
    }
    navigateRegister() {
        this.router.navigate(['../register'], { relativeTo: this.route }).catch();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__["SubscribeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".india-map-desktop {\n  margin-bottom: 150px;\n}\n.india-map-desktop .data-table {\n  padding-left: 8%;\n}\n.india-map-desktop .data-table table {\n  width: 100%;\n  overflow-y: scroll;\n  height: 530px;\n  display: block;\n}\n.india-map-desktop .data-table table td, .india-map-desktop .data-table table th {\n  text-align: center;\n}\n.india-map-desktop .data-table table th {\n  vertical-align: middle;\n}\n.india-map-desktop .data-table table tr:nth-child(2) {\n  background-color: burlywood;\n}\n.india-map-mobile {\n  margin-bottom: 150px;\n}\n.india-map-mobile .data-table {\n  padding-left: 8%;\n}\n.india-map-mobile .data-table table {\n  width: 100%;\n  overflow-y: scroll;\n  height: 530px;\n  display: block;\n}\n.india-map-mobile .data-table table td, .india-map-mobile .data-table table th {\n  text-align: center;\n}\n.india-map-mobile .data-table table th {\n  vertical-align: middle;\n}\n.india-map-mobile .data-table table tr:nth-child(2) {\n  background-color: burlywood;\n}\n@media (min-width: 1450px) {\n  .india-map-mobile {\n    display: none;\n  }\n}\n@media (max-width: 1449px) {\n  .india-map-desktop {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvQzpcXFVzZXJzXFxBa2FzaFxcT25lRHJpdmVcXERlc2t0b3BcXENyb3dkU2FmZVxcQ3Jvd2RTYWZlXFxDb3ZpZDE5L3NyY1xcYXBwXFxtYWlucGFnZVxcbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNHWjtBREZZO0VBQ0ksa0JBQUE7QUNJaEI7QURGWTtFQUNJLHNCQUFBO0FDSWhCO0FERlk7RUFDSSwyQkFBQTtBQ0loQjtBRENBO0VBQ0ksb0JBQUE7QUNFSjtBRERJO0VBQ0ksZ0JBQUE7QUNHUjtBREZRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNJWjtBREhZO0VBQ0ksa0JBQUE7QUNLaEI7QURIWTtFQUNJLHNCQUFBO0FDS2hCO0FESFk7RUFDSSwyQkFBQTtBQ0toQjtBREFBO0VBQ0k7SUFDSSxhQUFBO0VDR047QUFDRjtBRERBO0VBQ0k7SUFDSSxhQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGlhLW1hcC1kZXNrdG9we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICAuZGF0YS10YWJsZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgdGQsIHRoe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoe1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmluZGlhLW1hcC1tb2JpbGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgIC5kYXRhLXRhYmxle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgICAgICAgICAgaGVpZ2h0OjUzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB0ZCwgdGh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGh7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ1MHB4KXtcclxuICAgIC5pbmRpYS1tYXAtbW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDlweCl7XHJcbiAgICAuaW5kaWEtbWFwLWRlc2t0b3B7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIi5pbmRpYS1tYXAtZGVza3RvcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuLmluZGlhLW1hcC1kZXNrdG9wIC5kYXRhLXRhYmxlIHtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbn1cbi5pbmRpYS1tYXAtZGVza3RvcCAuZGF0YS10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogNTMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmluZGlhLW1hcC1kZXNrdG9wIC5kYXRhLXRhYmxlIHRhYmxlIHRkLCAuaW5kaWEtbWFwLWRlc2t0b3AgLmRhdGEtdGFibGUgdGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5kaWEtbWFwLWRlc2t0b3AgLmRhdGEtdGFibGUgdGFibGUgdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmluZGlhLW1hcC1kZXNrdG9wIC5kYXRhLXRhYmxlIHRhYmxlIHRyOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbn1cblxuLmluZGlhLW1hcC1tb2JpbGUge1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cbi5pbmRpYS1tYXAtbW9iaWxlIC5kYXRhLXRhYmxlIHtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbn1cbi5pbmRpYS1tYXAtbW9iaWxlIC5kYXRhLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA1MzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW5kaWEtbWFwLW1vYmlsZSAuZGF0YS10YWJsZSB0YWJsZSB0ZCwgLmluZGlhLW1hcC1tb2JpbGUgLmRhdGEtdGFibGUgdGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5kaWEtbWFwLW1vYmlsZSAuZGF0YS10YWJsZSB0YWJsZSB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaW5kaWEtbWFwLW1vYmlsZSAuZGF0YS10YWJsZSB0YWJsZSB0cjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDUwcHgpIHtcbiAgLmluZGlhLW1hcC1tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQ5cHgpIHtcbiAgLmluZGlhLW1hcC1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");






const dataset = [{
        "id": "035",
        "value": "1.5",
        "showLabel": "1"
    }];
const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
            "minvalue": "0",
            "maxvalue": "1",
            "color": "#008000"
        }, {
            "minvalue": "1",
            "maxvalue": "100",
            "color": "#FFA07A"
        }, {
            "minvalue": "100",
            "maxvalue": "250",
            "color": "#90EE90"
        }, {
            "minvalue": "250",
            "maxvalue": "400",
            "color": "#FFFFE0"
        }, {
            "minvalue": "400",
            "maxvalue": "600",
            "color": "#FFFACD"
        }, {
            "minvalue": "600",
            "maxvalue": "800",
            "color": "#EEE8AA"
        }, {
            "minvalue": "800",
            "maxvalue": "1000",
            "color": "#FFA07A"
        }, {
            "minvalue": "1000",
            "maxvalue": "1200",
            "color": "#CD5C5C"
        }, {
            "minvalue": "1200",
            "maxvalue": "1500",
            "color": "#B22222"
        }, {
            "minvalue": "1500",
            "maxvalue": "3000",
            "color": "#8B0000"
        }]
};
let MainpageComponent = class MainpageComponent {
    constructor(appservice, subscribeservice, router, route) {
        this.appservice = appservice;
        this.subscribeservice = subscribeservice;
        this.router = router;
        this.route = route;
        this.id = 0;
        this.error = false;
        this.stateFullData = [];
        this.stateMapFullData = [];
    }
    ngOnInit() {
        this.subscribeservice.setHeader('Coronavirus Infection Map Across India');
        this.fetchGroupDataDone = false;
        this.appservice
            .gatherDataApi()
            .then((response) => {
            if (response.status != 200) {
                this.error = true;
            }
            else {
                console.log(response);
                response.body.forEach((stateData) => {
                    let statemodel = new _models_models__WEBPACK_IMPORTED_MODULE_5__["StateData"](stateData);
                    let stateMapModel = new _models_models__WEBPACK_IMPORTED_MODULE_5__["StateMapData"](stateData);
                    this.stateFullData.push(statemodel);
                    this.stateMapFullData.push(stateMapModel);
                });
                console.log(this.stateFullData);
                console.log(this.stateMapFullData);
                this.dataSource = {
                    "chart": {
                        // "caption": "Coronavirus Infection Risk Map",
                        // "subcaption": "India",
                        "includevalueinlabels": "1",
                        "labelsepchar": ": ",
                        "entityFillHoverColor": "#FFF9C4",
                        "theme": "fusion"
                    },
                    // Aesthetics; ranges synced with the slider
                    "colorrange": colorrange,
                    // Source data as JSON --> id represents countries of the world.
                    "data": this.stateMapFullData
                };
                this.fetchGroupDataDone = true;
            }
        }).catch((err) => {
            this.fetchGroupDataDone = true;
            console.log(err);
        });
    }
    gotoState(event) {
        this.id = (event['dataObj']['id']);
        this.subscribeservice.setId(this.id);
        console.log(this.id);
        this.router.navigate(['../home'], { relativeTo: this.route }).catch();
        // location.reload();
        // this.chartCreated.dispose();
    }
    initializedMap(event) {
        this.chartCreated = event.chart;
        console.log(this.chartCreated);
    }
};
MainpageComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__["SubscribeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainpage',
        template: __webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainpage/mainpage.component.html"),
        styles: [__webpack_require__(/*! ./mainpage.component.scss */ "./src/app/mainpage/mainpage.component.scss")]
    })
], MainpageComponent);



/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: StateData, StateMapData, IdToStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateData", function() { return StateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMapData", function() { return StateMapData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdToStateName", function() { return IdToStateName; });
class StateData {
    constructor(data) {
        this.id = data['id'],
            this.name = IdToStateName[data['id']],
            this.infected = data['infected'],
            this.deaths = data['deaths'],
            this.recovered = data['recovered'],
            this.active = (parseInt(data['infected']) - parseInt(data['deaths']) - parseInt(data['recovered'])).toString();
    }
}
StateData.ctorParameters = () => [
    { type: undefined }
];
class StateMapData {
    constructor(data) {
        this.id = data['id'];
        this.value = data['infected'];
        this.showLabel = "1";
    }
}
StateMapData.ctorParameters = () => [
    { type: undefined }
];
var IdToStateName;
(function (IdToStateName) {
    IdToStateName["000"] = "India";
    IdToStateName["001"] = "Andaman and Nicobar Islands";
    IdToStateName["002"] = "Andhra Pradesh";
    IdToStateName["003"] = "Arunachal Pradesh";
    IdToStateName["004"] = "Assam";
    IdToStateName["005"] = "Bihar";
    IdToStateName["006"] = "Chandigarh";
    IdToStateName["007"] = "Chhattisgarh";
    IdToStateName["008"] = "Dadra and Nagar Haveli";
    IdToStateName["009"] = "Daman and Diu";
    IdToStateName["010"] = "Delhi";
    IdToStateName["011"] = "Goa";
    IdToStateName["012"] = "Gujarat";
    IdToStateName["013"] = "Haryana";
    IdToStateName["014"] = "Himachal Pradesh";
    IdToStateName["015"] = "Jammu and Kashmir";
    IdToStateName["016"] = "Jharkhand";
    IdToStateName["017"] = "Karnataka";
    IdToStateName["018"] = "Kerala";
    IdToStateName["019"] = "Lakshadweep";
    IdToStateName["020"] = "Madhya Pradesh";
    IdToStateName["021"] = "Maharashtra";
    IdToStateName["022"] = "Manipur";
    IdToStateName["023"] = "Meghalaya";
    IdToStateName["024"] = "Mizoram";
    IdToStateName["025"] = "Nagaland";
    IdToStateName["026"] = "Odisha";
    IdToStateName["027"] = "Puducherry";
    IdToStateName["028"] = "Punjab";
    IdToStateName["029"] = "Rajasthan";
    IdToStateName["030"] = "Sikkim";
    IdToStateName["031"] = "Tamil Nadu";
    IdToStateName["032"] = "Tripura";
    IdToStateName["033"] = "Uttar Pradesh";
    IdToStateName["034"] = "Uttarakhand";
    IdToStateName["035"] = "West Bengal";
    IdToStateName["036"] = "Telangana";
})(IdToStateName || (IdToStateName = {}));


/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register form {\n  margin-bottom: 200px;\n  margin-left: 14%;\n}\n.register form .form-register {\n  text-align: center;\n}\n.register form .form-register .register-button {\n  min-width: 80px;\n  min-height: 34px;\n  background-color: #FFCB05;\n  border: none;\n  border-radius: 8%;\n  font-weight: 700;\n  color: #004C6C;\n}\n.title {\n  padding: 4px 15px;\n  background-color: aliceblue;\n  margin-bottom: 13px;\n}\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n}\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.closebtn:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxBa2FzaFxcT25lRHJpdmVcXERlc2t0b3BcXENyb3dkU2FmZVxcQ3Jvd2RTYWZlXFxDb3ZpZDE5L3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBREdBO0VBQ0ksaUJBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNCU7XHJcbiAgICAgICAgLmZvcm0tcmVnaXN0ZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLnJlZ2lzdGVyLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQjA1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDRDNkM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VidG46aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIucmVnaXN0ZXIgZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMTQlO1xufVxuLnJlZ2lzdGVyIGZvcm0gLmZvcm0tcmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXIgZm9ybSAuZm9ybS1yZWdpc3RlciAucmVnaXN0ZXItYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQjA1O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDglO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwNEM2Qztcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlYnRuOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_5__);






let RegisterComponent = class RegisterComponent {
    constructor(appservice, subscribeservice, router, route) {
        this.appservice = appservice;
        this.subscribeservice = subscribeservice;
        this.router = router;
        this.route = route;
        this.userloader = false;
        this.phonenumber = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.otp = '';
        this.otpFromApi = '';
        this.otpValidate = false;
        this.registerflag = false;
        this.errorflag = false;
        this.errorMsg = "";
    }
    ngOnInit() {
        this.subscribeservice.setHeader('Registration Portal');
    }
    registerUser() {
        if (this.phonenumber != "" && this.email != "" && this.password != "" && this.confirmPassword != "") {
            if (this.password != this.confirmPassword) {
                alert("Passwords dont match!");
                this.password = "";
                this.confirmPassword = "";
            }
            if (this.phonenumber.length != 10) {
                alert("Phone number should be 10 digits");
                this.phonenumber = "";
            }
            else {
                let payload;
                payload = {
                    "name": this.email,
                    "user": this.phonenumber,
                    "password": Object(js_sha256__WEBPACK_IMPORTED_MODULE_5__["sha256"])(this.password)
                };
                this.userloader = true;
                this.appservice
                    .registerApi(payload).then((response) => {
                    this.userloader = false;
                    if (response.status == 201) {
                        this.router.navigate(['../login'], { relativeTo: this.route }).catch();
                    }
                }).catch((err) => {
                    console.log(err);
                });
                this.clearfields();
            }
        }
        else {
            alert("All fields are mandatory.");
        }
    }
    requestOtp() {
        if (this.email != "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                let payload;
                payload = {
                    "name": this.email
                };
                this.userloader = true;
                this.appservice
                    .messageOtpApi(payload).then((response) => {
                    this.userloader = false;
                    if (response.status == 200) {
                        this.errorflag = false;
                        this.otpFromApi = response.body['OTP'];
                        this.otpValidate = true;
                    }
                }).catch((err) => {
                    this.userloader = false;
                    if (err['status'] == 409) {
                        this.errorMsg = err['error']['OTP'];
                        this.errorflag = true;
                        this.email = "";
                    }
                    console.log(err);
                });
            }
            else {
                alert('Enter a valid Email');
            }
        }
        else {
            alert("Email is Mandatory!");
        }
    }
    validateOtp() {
        if (Object(js_sha256__WEBPACK_IMPORTED_MODULE_5__["sha256"])(this.otp) == this.otpFromApi) {
            this.registerflag = true;
        }
        else {
            alert("OTP does not match");
        }
    }
    clearfields() {
        this.phonenumber = "";
        this.password = "";
        this.confirmPassword = "";
        this.email = "";
    }
    navigateLogin() {
        this.router.navigate(['../login'], { relativeTo: this.route }).catch();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__["SubscribeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:5000";
        this.username = 'Covid19';
        this.password = 'Covid19';
        this.usernamePassword = `${this.username}:${this.password}`;
        this.httpOptions = ({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(this.usernamePassword)}`
            }),
            observe: 'response'
        });
    }
    registerApi(credentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/register`;
            return this.http.post(url, credentials, this.httpOptions).toPromise();
        });
    }
    messageOtpApi(credentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/send_otp`;
            return this.http.post(url, credentials, this.httpOptions).toPromise();
        });
    }
    loginApi(credentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/login`;
            return this.http.post(url, credentials, this.httpOptions).toPromise();
        });
    }
    uploadApi(credentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/crowd_detection`;
            return this.http.post(url, credentials, this.httpOptions).toPromise();
        });
    }
    uploadVideoApi(credentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/crowd_detection_video`;
            return this.http.post(url, credentials, this.httpOptions).toPromise();
        });
    }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
        });
    }
    gatherDataApi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/state_data`;
            return this.http.get(url, this.httpOptions).toPromise();
        });
    }
    gatherHeatMapDataApi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/get_heatmap`;
            return this.http.get(url, this.httpOptions).toPromise();
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/services/subscribe.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/subscribe.service.ts ***!
  \***********************************************/
/*! exports provided: SubscribeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeService", function() { return SubscribeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SubscribeService = class SubscribeService {
    constructor() {
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.id = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.header = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    setUserData(role) {
        this.userData.next(role);
    }
    setId(id) {
        this.id.next(id);
    }
    setHeader(header) {
        this.header.next(header);
    }
    setToken(tok) {
        this.token.next(tok);
    }
};
SubscribeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubscribeService);



/***/ }),

/***/ "./src/app/symptoms/symptoms.component.scss":
/*!**************************************************!*\
  !*** ./src/app/symptoms/symptoms.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zL3N5bXB0b21zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/symptoms/symptoms.component.ts":
/*!************************************************!*\
  !*** ./src/app/symptoms/symptoms.component.ts ***!
  \************************************************/
/*! exports provided: SymptomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function() { return SymptomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");



let SymptomsComponent = class SymptomsComponent {
    constructor(subscribeservice) {
        this.subscribeservice = subscribeservice;
    }
    ngOnInit() {
        this.subscribeservice.setHeader('Covid19 Symptoms');
    }
};
SymptomsComponent.ctorParameters = () => [
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_2__["SubscribeService"] }
];
SymptomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-symptoms',
        template: __webpack_require__(/*! raw-loader!./symptoms.component.html */ "./node_modules/raw-loader/index.js!./src/app/symptoms/symptoms.component.html"),
        styles: [__webpack_require__(/*! ./symptoms.component.scss */ "./src/app/symptoms/symptoms.component.scss")]
    })
], SymptomsComponent);



/***/ }),

/***/ "./src/app/testing/testing.component.scss":
/*!************************************************!*\
  !*** ./src/app/testing/testing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");



let TestingComponent = class TestingComponent {
    constructor(appservice) {
        this.appservice = appservice;
        this.latitude = 0;
        this.longitude = 0;
    }
    ngOnInit() {
        this.appservice.getPosition().then(pos => {
            console.log(`Position: ${pos.lng} ${pos.lat}`);
        });
    }
};
TestingComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
TestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testing',
        template: __webpack_require__(/*! raw-loader!./testing.component.html */ "./node_modules/raw-loader/index.js!./src/app/testing/testing.component.html"),
        styles: [__webpack_require__(/*! ./testing.component.scss */ "./src/app/testing/testing.component.scss")]
    })
], TestingComponent);



/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-upload {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n.image-upload .input-title {\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.image-upload .image-input {\n  padding-left: 19%;\n}\n.image-upload .image-preview {\n  margin-bottom: 10px;\n}\n.image-upload .image-submit {\n  margin-bottom: 10px;\n  background-color: #FFCB05;\n  border: none;\n  border-radius: 8%;\n  font-weight: 700;\n  color: #004C6C;\n  min-width: 80px;\n  min-height: 34px;\n}\n.disclaimer {\n  padding: 4px 5px;\n  padding-left: 2%;\n  background-color: aliceblue;\n  margin-bottom: 13px;\n}\n.disclaimer span {\n  font-weight: bold;\n}\n.notoken {\n  padding: 4px 5px;\n  padding-left: 2%;\n  background-color: aliceblue;\n  margin-bottom: 13px;\n  text-align: center;\n  font-weight: 500;\n  color: #004C6C;\n}\n.about {\n  padding: 4px 5px;\n  padding-left: 2%;\n  background-color: aliceblue;\n  margin-bottom: 13px;\n  color: #004c6c;\n  font-weight: 600;\n}\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n}\n.alert-success {\n  padding: 20px;\n  background-color: #2fc72f;\n  color: white;\n  text-align: center;\n}\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.closebtn:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL0M6XFxVc2Vyc1xcQWthc2hcXE9uZURyaXZlXFxEZXNrdG9wXFxDcm93ZFNhZmVcXENyb3dkU2FmZVxcQ292aWQxOS9zcmNcXGFwcFxcdXBsb2FkXFx1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLGlCQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0ksaUJBQUE7QUNHUjtBREFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLSjtBREZFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0o7QURGRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tKO0FERkU7RUFDRSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXVwbG9hZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAuaW5wdXQtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWlucHV0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTklO1xyXG4gICAgfVxyXG4gICAgLmltYWdlLXByZXZpZXd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1zdWJtaXR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQjA1O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4JTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA0QzZDO1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcbi5kaXNjbGFpbWVye1xyXG4gICAgcGFkZGluZzogNHB4IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4ubm90b2tlbntcclxuICAgIHBhZGRpbmc6IDRweCA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwNEM2QztcclxufVxyXG4uYWJvdXR7XHJcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbiAgICBjb2xvcjogIzAwNGM2YztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmFsZXJ0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMTk5LCA0Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VidG46aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuIiwiLmltYWdlLXVwbG9hZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pbWFnZS11cGxvYWQgLmlucHV0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbWFnZS11cGxvYWQgLmltYWdlLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxOSU7XG59XG4uaW1hZ2UtdXBsb2FkIC5pbWFnZS1wcmV2aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbWFnZS11cGxvYWQgLmltYWdlLXN1Ym1pdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNCMDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA0QzZDO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgcGFkZGluZzogNHB4IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuLmRpc2NsYWltZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm90b2tlbiB7XG4gIHBhZGRpbmc6IDRweCA1cHg7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwNEM2Qztcbn1cblxuLmFib3V0IHtcbiAgcGFkZGluZzogNHB4IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBjb2xvcjogIzAwNGM2YztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmYzcyZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlYnRuOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UploadComponent = class UploadComponent {
    constructor(appservice, subscribeservice, router, route) {
        this.appservice = appservice;
        this.subscribeservice = subscribeservice;
        this.router = router;
        this.route = route;
        this.submitEnable = true;
        this.errorMsg = false;
        this.videoFlag = false;
        //json
        this.finalJson = {};
        // errorMsg: boolean = false;
        this.currentId = 0;
        this.userloader = false;
        this.tokenFlag = false;
        this.successFlag = false;
    }
    ngOnInit() {
        this.subscribeservice.userData.subscribe((user) => {
            // console.log(user);
            // user = "a";
            this.user = user;
            console.log(user);
            if (user == null) {
                this.router.navigate(['../login'], { relativeTo: this.route }).catch();
            }
            else {
                this.subscribeservice.token.subscribe((tok) => {
                    // tok=5;
                    this.tokenFlag = (tok > 0) ? true : false;
                });
                this.subscribeservice.setHeader('Upload Images on Crowd Gathering');
                this.appservice.getPosition()
                    .then(pos => {
                    console.log(`Position: ${pos.lng} ${pos.lat}`);
                    this.latitude = `${pos.lat}`;
                    this.longitude = `${pos.lng}`;
                }).catch((err) => {
                    this.errorMsg = true;
                    console.log(err);
                });
            }
        });
    }
    addPictures() {
        this.userloader = true;
        if (this.videoFlag == false) {
            this.finalJson = {
                "image": this.sellersPermitString,
                "lat": this.latitude,
                "long": this.longitude,
                "user": this.user
            };
            this.appservice
                .uploadApi(this.finalJson).then((response) => {
                console.log(response);
                this.userloader = false;
                if (response.status == 200) {
                    this.successFlag = true;
                    this.userloader = false;
                    this.successMsg = response.body['Person Count'];
                    // this.personCount = response.body.
                    // this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
                }
            }).catch((err) => {
                this.userloader = false;
                this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
                console.log(err);
            });
        }
        else {
            this.finalJson = {
                "video_string": this.sellersPermitString,
                "lat": this.latitude,
                "long": this.longitude,
                "user": this.user
            };
            this.appservice
                .uploadVideoApi(this.finalJson).then((response) => {
                console.log(response);
                this.userloader = false;
                if (response.status == 200) {
                    this.userloader = false;
                    this.successFlag = true;
                    this.successMsg = response.body['Person Count'];
                    // this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
                }
            }).catch((err) => {
                this.userloader = false;
                this.router.navigate(['../heatmap'], { relativeTo: this.route }).catch();
                console.log(err);
            });
        }
        console.log(this.finalJson);
    }
    picked(event, field) {
        console.log(event);
        this.currentId = field;
        let fileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            if (field == 1) {
                this.sellersPermitFile = file;
                this.handleInputChange(file); //turn into base64
            }
        }
        else {
            alert("No file selected");
        }
    }
    handleInputChange(files) {
        var file = files;
        this.submitEnable = true;
        var pattern1 = /image-*/;
        var pattern2 = /video-*/;
        var reader = new FileReader();
        this.videoFlag = false;
        this.imgURL = "";
        if (!file.type.match(pattern1) && !file.type.match(pattern2)) {
            alert('invalid format');
            return;
        }
        if (file.type.match(pattern1)) {
            reader.onload = (_event) => {
                this.imgURL = reader.result;
            };
        }
        else {
            this.videoFlag = true;
        }
        this.submitEnable = false;
        reader.onloadend = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        //this.imageSrc = base64result;
        let id = this.currentId;
        switch (id) {
            case 1:
                this.sellersPermitString = base64result;
                break;
        }
        this.log();
    }
    log() {
        // for debug
        // console.log('1', this.sellersPermitString);
    }
};
UploadComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__["SubscribeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload.component.html"),
        styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")]
    })
], UploadComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Akash\OneDrive\Desktop\CrowdSafe\CrowdSafe\Covid19\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map