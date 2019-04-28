import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhongVeComponent } from './phong-ve.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';




const routes: Routes = [
    {
        path: '', component: PhongVeComponent, children: [
            {
                path: '', component: DanhSachGheComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhongVeRoutingModule { }
