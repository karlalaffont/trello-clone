import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { faClose,faClock, faTag, faUser, faCheckSquare, faBars, faCheckToSlot} from '@fortawesome/free-solid-svg-icons'
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  faClose = faClose;
  faTag = faTag;
  faClock = faClock;
  faUser = faUser;
  faCheckSquare = faCheckSquare;
  faBars = faBars;
  faCheckToSlot = faCheckToSlot;

  todo: ToDo;
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData

  ) {
    this.todo = data.todo;
  }

  ngOnInit(): void {

  }

  close(){
this.dialogRef.close(

);
  }

  closeWithRta(rta: boolean){
this.dialogRef.close({ rta });
  }
}
