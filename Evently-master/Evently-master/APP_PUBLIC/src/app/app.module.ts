import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
import { APP_BASE_HREF} from '@angular/common'; 

@NgModule({
  declarations: [
    FrameworkComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListComponent,
    CreateComponent,
    DetailComponent,
    UpdateComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot([
		{
			path: '',
			component: HomeComponent
		},
		{
			path: 'events',
			component: ListComponent
		},
		{
			path: 'create',
			component: CreateComponent
		},
		{
			path: 'event/:id',
			component: DetailComponent
		},
		{
			path: 'edit/:id',
			component: UpdateComponent
		},
		{
			path: 'about',
			component: AboutComponent
		}
	]),
	FormsModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
