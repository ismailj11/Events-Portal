import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../core/models/event.model';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent {
  eventForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event: Event; isEdit: boolean },
    private fb: FormBuilder
  ) {
    this.eventForm = this.fb.group({
      eventName: [data.event?.eventName || '', Validators.required],
      description: [data.event?.description || ''],
      eventType: [data.event?.eventType || ''],
      date: [data.event?.date || '', Validators.required],
      location: [data.event?.location || ''],
      category: [data.event?.category || ''],
      requiresTicket: [data.event?.requiresTicket || false]
    });
  }

  onSave(): void {
    if (this.eventForm.valid) {
      const formValue = { ...this.data.event, ...this.eventForm.value };
      this.dialogRef.close(formValue);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
