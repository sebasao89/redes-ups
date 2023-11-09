import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app/app.routes'
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            // BrowserModule,
            provideFirebaseApp(() => initializeApp(environment.firebase)),
            provideAuth(() => getAuth()),
            provideFirestore(() => getFirestore()),
            provideStorage(() => getStorage())
        ),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
