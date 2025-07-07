  import { appConfig } from './app/app.config';

  import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
  import { provideRouter } from '@angular/router';
  import { routes } from './app/app.routes';
  import { bootstrapApplication } from '@angular/platform-browser';
  import { importProvidersFrom } from '@angular/core';
  import { AppComponent } from './app/app.component';
  import { NgIconsModule } from '@ng-icons/core';
  import { provideAnimations } from '@angular/platform-browser/animations';
  //import { LucideAngularModule } from 'node_modules/lucide-angular/lib/lucide-angular.module';
  import { LucideAngularModule } from 'lucide-angular';

  //import { User, Hospital, HeartPulse } from 'lucide-angular';
   import { User, Hospital, HeartPulse, ClipboardEdit  } from 'lucide-angular';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';

  // bootstrapApplication(AppComponent, appConfig)
  //   .catch((err) => console.error(err));

    bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),       // ✅ <-- Register HttpClient
      provideRouter(routes),     // ✅ <-- Register routes if using routing
      // other global providers
      provideAnimations(), 
       importProvidersFrom(
      LucideAngularModule.pick({
        User,
        Hospital,
        HeartPulse,
        ClipboardEdit 
      })),
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ]
  }).catch((err) => console.error(err));