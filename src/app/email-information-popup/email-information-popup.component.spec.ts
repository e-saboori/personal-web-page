import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInformationPopupComponent } from './email-information-popup.component';

describe('EmailInformationPopupComponent', () => {
  let component: EmailInformationPopupComponent;
  let fixture: ComponentFixture<EmailInformationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInformationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInformationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
