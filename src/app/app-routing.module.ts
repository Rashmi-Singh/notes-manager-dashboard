import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
		component: DashboardComponent,
		path: 'dashboard',
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/dashboard',
	},
	{
		loadChildren: () => import('./text-notes').then(m => m.TextNotesModule),
		path: 'text-notes',
	},
	{
		loadChildren: () => import('./article-notes').then(m => m.ArticleNotesModule),
		path: 'article-notes',
	},
	{
		loadChildren: () => import('./picture-notes').then(m => m.PictureNotesModule),
		path: 'picture-notes',
	},
	{
		loadChildren: () => import('./document-notes').then(m => m.DocumentNotesModule),
		path: 'document-notes',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
