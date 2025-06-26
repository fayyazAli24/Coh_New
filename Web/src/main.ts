import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),       // ✅ <-- Register HttpClient
    provideRouter(routes),     // ✅ <-- Register routes if using routing
    // other global providers if needed
  ]
}).catch((err) => console.error(err));