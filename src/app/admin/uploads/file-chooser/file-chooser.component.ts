import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.styl']
})
export class FileChooserComponent implements OnInit {
  modalRef: BsModalRef;
  file: string;
  modalConfig = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg',
    keyboard: true
  };
  @Output() fileSelected = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  closeModal(){
    if(this.modalRef){
      this.modalRef.hide()
    }
  }

  onFileSelection(filePath){
    this.file = filePath;
    this.fileSelected.emit(this.file)
    this.closeModal();
  }

}
