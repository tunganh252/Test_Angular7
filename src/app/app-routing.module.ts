import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [

	{
		// Trỏ mặc định đến trang cần hiện
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: "./home/home.module#HomeModule"
	},
	// {
	// 	path: "admin", loadChildren: "./admin/admin.module#AdminModule"
	// },
	{
		// Page not found 404
		path: "**",
		component: PageNotFoundComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
