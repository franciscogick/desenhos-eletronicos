import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

let sanitizer: DomSanitizer;

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
