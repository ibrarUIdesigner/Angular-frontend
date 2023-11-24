import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxIziToastModule } from 'ngx-izitoast';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Website/home/navbar/navbar.component';
import { HeroBannerComponent } from './components/Website/home/hero-banner/hero-banner.component';

import { DataTablesModule } from 'angular-datatables';
import { AboutMeComponent } from './components/Website/home/about-me/about-me.component';
import { ServicesComponent } from './components/Website/home/services/services.component';
import { ProjectsComponent } from './components/Website/home/projects/projects.component';
import { HomeComponent } from './components/Website/home/home.component';
import { PrimaryButtonComponent } from './components/Website/home/util-components/primary-button/primary-button.component';
import { MainHeadingComponent } from './components/Website/home/util-components/main-heading/main-heading.component';
import { BlogsComponent } from './components/Website/home/blogs/blogs.component';
import { FooterComponent } from './components/Website/home/footer/footer.component';
import { AllBlogsComponent } from './components/Website/home/blogs/all-blogs/all-blogs.component';
import { HeaderComponent } from './components/Admin/header/header.component';
import { SidebarComponent } from './components/Admin/sidebar/sidebar.component';
import { ContentComponent } from './components/Admin/content/content.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { SocialsComponent } from './components/Admin/dashboard/socials/socials.component';
import { AdminProjectsComponent } from './components/Admin/dashboard/projects/projects.component';
import { AnalyticsComponent } from './components/Admin/dashboard/analytics/analytics.component';
import { CreateProjectComponent } from './components/Admin/dashboard/projects/create-project/create-project.component';
import { AdminBlogsComponent } from './components/Admin/dashboard/admin-blogs/admin-blogs.component';
import { AdminCreateBlogsComponent } from './components/Admin/dashboard/admin-blogs/admin-create-blogs/admin-create-blogs.component';
import { CreateSocialsComponent } from './components/Admin/dashboard/socials/create-socials/create-socials.component';
import { SubBannerComponent } from './components/Website/sub-banner/sub-banner.component';
import { RightBarComponent } from './components/Website/right-bar/right-bar.component';
import { BlogDetailsComponent } from './components/Website/home/blogs/blog-details/blog-details.component';
import { ModalPopupComponent } from './components/Admin/modal-popup/modal-popup.component';
import { TagsComponent } from './components/Admin/dashboard/tags/tags.component';
import { CreateTagsComponent } from './components/Admin/dashboard/tags/create-tags/create-tags.component';
import { GlobalErrorHandlingService } from './services/global-error-handling.service';
import { MyInterceptorInterceptor } from './services/my-interceptor.interceptor';
import { TopicsComponent } from './components/Website/topics/topics.component';
import { CreateTopicsComponent } from './components/Admin/dashboard/topics/create-topics/create-topics.component';
import { AdminTopicsComponent } from './components/Admin/dashboard/topics/topics.component';
import { WebTopicMoudlesComponent } from './components/Website/home/blogs/web-topic-moudles/web-topic-moudles.component';
import { AdminModulesComponent } from './components/Admin/dashboard/admin-modules/admin-modules.component';
import { CreateModulesComponent } from './components/Admin/dashboard/admin-modules/create-modules/create-modules.component';
import { ModuleArticlesComponent } from './components/Admin/dashboard/admin-modules/module-articles/module-articles.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HeroBannerComponent,
		AboutMeComponent,
		ServicesComponent,
		ProjectsComponent,
		HomeComponent,
		PrimaryButtonComponent,
		MainHeadingComponent,
		BlogsComponent,
		FooterComponent,
		AllBlogsComponent,
		HeaderComponent,
		SidebarComponent,
		ContentComponent,
		DashboardComponent,
		SocialsComponent,
		AdminProjectsComponent,
		AnalyticsComponent,
		CreateProjectComponent,
		AdminBlogsComponent,
		AdminCreateBlogsComponent,
		CreateSocialsComponent,
		SubBannerComponent,
		RightBarComponent,
		BlogDetailsComponent,
		ModalPopupComponent,
		TagsComponent,
		CreateTagsComponent,
		TopicsComponent,
		CreateTopicsComponent,
		AdminTopicsComponent,
  WebTopicMoudlesComponent,
  AdminModulesComponent,
  CreateModulesComponent,
  ModuleArticlesComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DataTablesModule,
		HttpClientModule,
		NgxIziToastModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		AngularEditorModule,
		ToastrModule.forRoot(),
	],
	providers: [
		{ provide: ErrorHandler, useClass: GlobalErrorHandlingService },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MyInterceptorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
