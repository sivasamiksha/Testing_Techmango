
import {Page,Locator,test} from '@playwright/test';

class TextBox {
  readonly page:Page;
  readonly textBox:Locator;
  readonly fullName:Locator;
  readonly email: Locator;
  readonly temporaryAddress: Locator;
  readonly permenantAddress: Locator;
  readonly submit : Locator;

  constructor(page:Page){
    this.page=page;
    this.textBox=page.getByRole('link',{name:'Text Box'});
    this.fullName=page.getByPlaceholder('Full Name');
    this.email=page.getByPlaceholder('name@example.com');
    this.temporaryAddress=page.locator('#currentAddress');
    this.permenantAddress=page.locator('#permanentAddress');
    this.submit=page.getByText('Submit');
  }

 async textBoxe(){
    await this.page.goto("https://demoqa.com/elements");
    await this.textBox.click();
    await this.fullName.fill("Sivanesaselvan");
    const value=await this.fullName.inputValue();
    console.log(value);
    await this.email.fill("sivan@yopmail.com");
    await this.temporaryAddress.fill("254/7, North");
    await this.permenantAddress.fill("64/south");
    await this.submit.click();

 }
    
 }
test('Fill Text Box Form', async ({ page }) => {
  const box = new TextBox(page); // ✅ pass page
  await box.textBoxe();
});