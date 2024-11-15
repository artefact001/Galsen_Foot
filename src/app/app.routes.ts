import { Routes } from '@angular/router'
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component'
// import { ZoneDashboardComponent } from './Component/zone-dashboard/zone-dashboard.component'
import { EquipeDashboardComponent } from './Component/equipe-dashboard/equipe-dashboard.component'
import { LoginComponent } from './Component/login/login.component'
import { UserManagementComponent } from './Component/user-management/user-management.component'
import { TirageComponent } from './Component/tirage/tirage.component'
import { AcceuilComponent } from './Component/acceuil/acceuil.component'
import { MatcheComponent } from './Component/matche/matche.component'
import { ZoneDashboardComponent } from './Component/zone-dashboard/zone-dashboard.component'
import { NotFoundComponent } from './Component/not-found/not-found.component'
import { CompetitionComponent } from './competition/competition.component'




export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'zones', component: ZoneDashboardComponent },
  { path: 'equipe-dashboard', component: EquipeDashboardComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'matches', component: MatcheComponent },
  { path: 'tirages', component: TirageComponent },
  { path: 'tirages/lancer', component: TirageComponent },
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }, 
  { path: 'acceuil', component: AcceuilComponent }, // Ensure this path and component are correct
  { path: 'competition',component: CompetitionComponent },
  { path: '**', component: NotFoundComponent } 


]
