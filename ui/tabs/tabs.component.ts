import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit, AfterViewInit {
  selectedOption: any;
  pillWidth = 0;
  pillOffset = 0;
  @Input() options: any;
  @Input() bindLabel!: string;
  @Output() select = new EventEmitter<any>();
  @ViewChild('radioContainer') radioContainer!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.selectedOption = this.options[0];
  }

  ngAfterViewInit() {
    const firstChild = this.radioContainer.nativeElement.children[0];
    this.updatePillPosition(firstChild.offsetWidth, firstChild.offsetLeft);

    this.cdr.detectChanges();
    this.select.emit(this.selectedOption);
    this.cdr.detectChanges();
  }

  onSelect(event: any, option: any) {
    event.preventDefault();
    const el = event.target as HTMLElement;
    this.updatePillPosition(el.offsetWidth, el.offsetLeft);
    this.selectedOption = option;
    this.select.emit(this.selectedOption);
  }

  updatePillPosition(width: number, left: number) {
    this.pillWidth = width;
    this.pillOffset = left;
  }
}
