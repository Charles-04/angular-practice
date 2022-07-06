import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosServices } from './services/todos.service';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    TodosServices,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
