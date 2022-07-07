import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosServices } from './services/todos.service';
import { ApiService } from './services/api.service';
import { Sports } from './providers/sports';
import { SportsUiComponent } from './pages/sports-ui/sports-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SportComponent } from './pages/sport/sport.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, SportsUiComponent, SportComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [TodosServices, ApiService, Sports],
  bootstrap: [AppComponent],
})
export class AppModule {}
