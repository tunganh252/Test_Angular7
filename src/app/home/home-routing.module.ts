import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';




const routes: Routes = [
    {
        path: "", component: HomeComponent, children: [

            {
                path: 'danh-sach-phim', loadChildren: './danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'
            },
            {
                path: 'tin-tuc', component: TinTucComponent
            },
            // phòng vé
            {
                path: "phong-ve/:id", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"
            },
            {
                path: "form", loadChildren: "./form/form.module#FormModule"
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
