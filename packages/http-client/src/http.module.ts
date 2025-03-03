import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingBarInterceptor } from './loading-bar.interceptor';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({ exports: [HttpClientModule, LoadingBarModule], imports: [LoadingBarModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingBarInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class LoadingBarHttpClientModule {}
