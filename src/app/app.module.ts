import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsentFormComponent } from './consent-form/consent-form.component';
import { HeaderComponent } from './header/header.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { DemographicFormComponent } from './demographic-form/demographic-form.component';
import { ConsentPdfComponent } from './consent-pdf/consent-pdf.component';
import { SampleVideoComponent } from './sample-video/sample-video.component';
import { IntroComponent } from './intro/intro.component';
import { VideosComponent } from './videos/videos.component';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { LastQuestionComponent } from './last-question/last-question.component';
import { NgAudioRecorderModule } from 'ng-audio-recorder';
import { AudioRecordingService } from './last-question/audio-recording.service';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EndPageComponent } from './end-page/end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentFormComponent,
    HeaderComponent,
    DemographicFormComponent,
    ConsentPdfComponent,
    SampleVideoComponent,
    IntroComponent,
    VideosComponent,
    QuestionModalComponent,
    LastQuestionComponent,
    LoginComponent,
    AdminDashComponent,
    EndPageComponent,
  ],
  entryComponents: [ConsentPdfComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTreeModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatGridListModule,
    NgbModule,
    HttpClientModule,
    NgAudioRecorderModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AudioRecordingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
