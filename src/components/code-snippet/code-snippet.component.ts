import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss'
})
export class CodeSnippetComponent {

  @Input() markdown!: string;

  copyToClipboard() {
    const code = this.markdown;

    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = code;
    document.body.appendChild(textarea);

    // Select and copy the text to clipboard
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);

  }
}
