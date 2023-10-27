import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageComponent } from "./contacto/components/page/page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contacts',
        component: PageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}