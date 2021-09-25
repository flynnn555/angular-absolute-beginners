import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  checkboxLabel = " I agree your terms";
  buttonClickedMessage = "You clicked the button";
  buttonClicked = false;

  checkboxState = false;
  checkboxCheckedMessage = "You checked the check box"
  userAgreedTerms = false;
  userAgreedTermsMessage = "You agreed our terms"
  userNotAgreedTerms = false;
  userNotAgreedTermsMessage = "You did not agree our terms"

  clicked(): void {
    this.resetFunction()
    // console.log("you clicked me");
    if (this.checkboxState == true) {
      this.userAgreedTerms = true;
    }
    else {
      this.userAgreedTerms = false;
      this.userNotAgreedTerms = true;
    }
    this.buttonClicked = true;
  }

  resetFunction(): void {
    this.buttonClicked = false;
    this.checkboxState = false;
    this.userAgreedTerms = false;
    this.userNotAgreedTerms
  }
  
  checkboxEvent(): void {

    // this.checkboxChecked = true;
    this.checkboxState = this.checkboxState ? false : true;
  }

  fileUpload(event: Event): void {
    let reader = new FileReader();
    let target = event.target as HTMLInputElement;
    let files: FileList = target.files;
    let file1 = files[0];
    console.log(file1);

    reader.onload = (e) => {
      console.log(reader.result);
      //this.fileString = myReader.result as string;
   };


  }

}

