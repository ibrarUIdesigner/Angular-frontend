import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/Website/home/blogs/blogs.component';
import { AllBlogsComponent } from './components/Website/home/blogs/all-blogs/all-blogs.component';

import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { AdminProjectsComponent } from './components/Admin/dashboard/projects/projects.component';
import { SocialsComponent } from './components/Admin/dashboard/socials/socials.component';
import { HomeComponent } from './components/Website/home/home.component';
import { AnalyticsComponent } from './components/Admin/dashboard/analytics/analytics.component';
import { CreateProjectComponent } from './components/Admin/dashboard/projects/create-project/create-project.component';
import { AdminBlogsComponent } from './components/Admin/dashboard/admin-blogs/admin-blogs.component';
import { AdminCreateBlogsComponent } from './components/Admin/dashboard/admin-blogs/admin-create-blogs/admin-create-blogs.component';
import { CreateSocialsComponent } from './components/Admin/dashboard/socials/create-socials/create-socials.component';
import { BlogDetailsComponent } from './components/Website/home/blogs/blog-details/blog-details.component';
import { TagsComponent } from './components/Admin/dashboard/tags/tags.component';
import { CreateTagsComponent } from './components/Admin/dashboard/tags/create-tags/create-tags.component';
import { TopicsComponent } from './components/Website/topics/topics.component';
import { AdminTopicsComponent } from './components/Admin/dashboard/topics/topics.component';
import { CreateTopicsComponent } from './components/Admin/dashboard/topics/create-topics/create-topics.component';
import { WebTopicMoudlesComponent } from './components/Website/home/blogs/web-topic-moudles/web-topic-moudles.component';
import { AdminModulesComponent } from './components/Admin/dashboard/admin-modules/admin-modules.component';
import { ModuleArticlesComponent } from './components/Admin/dashboard/admin-modules/module-articles/module-articles.component';
import { CreateModulesComponent } from './components/Admin/dashboard/admin-modules/create-modules/create-modules.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'articles', component: AllBlogsComponent },
	{ path: 'topics', component: TopicsComponent },
	{ path: 'topics/:id', component: WebTopicMoudlesComponent },
	{ path: 'articles/:id', component: BlogDetailsComponent },

	{ path: 'admin', component: DashboardComponent },
	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'analytics', component: AnalyticsComponent }],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'projects', component: AdminProjectsComponent }],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'blogs', component: AdminBlogsComponent }],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [
			{ path: 'blogs/create-blogs', component: AdminCreateBlogsComponent },
		],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [
			{ path: 'projects/create-project', component: CreateProjectComponent },
		],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'socials', component: SocialsComponent }],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [
			{ path: 'socials/create-social', component: CreateSocialsComponent },
		],
	},

	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'tags', component: TagsComponent }],
	},

	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'tags/create-tags', component: CreateTagsComponent }],
	},

	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'topics', component: AdminTopicsComponent }],
	},

	{
		path: 'admin',
		component: DashboardComponent,
		children: [
			{ path: 'topics/create-topics', component: CreateTopicsComponent },
		],
	},

	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'modules', component: AdminModulesComponent }],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [
			{ path: 'modules/create-modules', component: CreateModulesComponent },
		],
	},
	{
		path: 'admin',
		component: DashboardComponent,
		children: [{ path: 'modules/:id', component: ModuleArticlesComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
