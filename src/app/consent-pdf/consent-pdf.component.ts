import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consent-pdf',
  templateUrl: './consent-pdf.component.html',
  styleUrls: ['./consent-pdf.component.css']
})
export class ConsentPdfComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}
