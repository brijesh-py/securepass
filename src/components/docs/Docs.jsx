import { H1, H2, H3, P, Strong, UL } from "./Elements";
import DocsCard from "./DocsCard";

const Docs = () => {
  return (
    <section className="text-zinc-400">
      <DocsCard>
        <H1>SecurePass Documentation</H1>
        <H2>Overview</H2>
        <P>
          SecurePass is a powerful and user-friendly web application designed to
          generate Strong, unbreakable passwords to protect your online
          accounts. With a range of customizable options, SecurePass ensures you
          can create unique passwords with a single click, tailored to your
          specific security needs.
        </P>
      </DocsCard>
      <DocsCard>
        <H2>Features</H2>
        <H3>Password Generation</H3>
        <UL>
          <li>
            <Strong> Single Click Password Generation:</Strong> Generate Strong
            passwords with a single click.
          </li>
          <li>
            <Strong> Customizable Options:</Strong> Select from various options
            including lower case, mixed case, numbers, special characters,
            ambiguous characters, and custom characters.
          </li>
          <li>
            <Strong> Password Length:</Strong> Adjust the length of the
            generated password using a slider (29-60 characters).
          </li>
          <li>
            <Strong>Password Strength Indicator: </Strong> Visual indicator to
            show the strength of the generated password.
          </li>
          <li>
            <Strong>Save Password: </Strong> Option to save generated passwords
            for future reference.
          </li>
        </UL>
        <H3>Clipboard Management</H3>
        <UL>
          <li>
            <Strong> Single Click Password Generation:</Strong> Generate Strong
            passwords with a single click.
          </li>
          <li>
            <Strong> Customizable Options:</Strong> Select from various options
            including lower case, mixed case, numbers, special characters,
            ambiguous characters, and custom characters.
          </li>
          <li>
            <Strong> Password Length:</Strong> Adjust the length of the
            generated password using a slider (29-60 characters).
          </li>
          <li>
            <Strong>Password Strength Indicator: </Strong> Visual indicator to
            show the strength of the generated password.
          </li>
          <li>
            <Strong>Save Password: </Strong> Option to save generated passwords
            for future reference.
          </li>
          <li>
            <Strong>Bulk Password: </Strong> Generate multiple passwords at
            once.
          </li>
          <li>
            <Strong>Send Password by Email:</Strong> Send the generated
            passwords via email.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Getting Started</H2>
        <H3>Accessing SecurePass</H3>
        <P>To start using SecurePass, visit SecurePass.</P>
        <H3>Generating a Password</H3>
        <UL>
          <li>
            <Strong>Open SecurePass: </Strong>Go to the SecurePass homepage.
          </li>
          <li>
            <Strong>Select Options: </Strong>Choose your password options such
            as length, including lowercase, mixed case, numbers, special
            characters, ambiguous characters, and easy-to-read options.
          </li>
          <li>
            <Strong>Generate:</Strong> Click the {"Generate Password"} button to
            create your password.
          </li>
          <li>
            <Strong> View Password:</Strong> Your newly generated password will
            be displayed. You can copy it for immediate use.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Customizing Your Password</H2>
        <UL>
          <li>
            <Strong>Open SecurePass: </Strong>Go to the SecurePass homepage.
          </li>
          <li>
            <Strong>Custom Characters: </Strong>Enter your specific characters
            in the custom password field.
          </li>
          <li>
            <Strong>Generate: </Strong>Click the {"Generate Password"} button to
            create a password using your custom characters.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Saving Your Password</H2>
        <UL>
          <li>
            <Strong>Generate Password: </Strong>Follow the steps to generate a
            password.
          </li>
          <li>
            <Strong>Save Password: </Strong> Click the{"Save Password"} button
            to store the password in your saved passwords list.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Generating Bulk Passwords</H2>
        <UL>
          <li>
            <Strong>Open SecurePass:</Strong>Go to the SecurePass homepage.
          </li>
          <li>
            <Strong>Select Options: </Strong> Choose your desired password
            options.
          </li>
          <li>
            <Strong>Bulk Generation: </Strong> Toggle the bulk generation option
            and specify the number of passwords you need.
          </li>
          <li>
            <Strong>Generate: </Strong> Click the {"Generate Passwords"} button
            to create multiple passwords at once.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Sending Password by Email</H2>
        <UL>
          <li>
            <Strong>Generate Password: </Strong>Follow the steps to generate a
            password.
          </li>
          <li>
            <Strong>Send by Email: </Strong>Click the {"Send Password by Email"}
            button, enter your email address, and click {"Send Password"}. Your
            password will be sent to your email.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Tips for Creating Strong Passwords</H2>
        <UL>
          <li>
            <Strong>Use a mix of characters: </Strong>Combine uppercase,
            lowercase, numbers, and special characters.
          </li>
          <li>
            <Strong>Avoid common words and sequences: </Strong>Avoid using
            easily guessable words or sequences like {"password123"}.
          </li>
          <li>
            <Strong>Increase password length </Strong> Longer passwords are
            generally more secure.
          </li>
          <li>
            <Strong>Use unique passwords for different accounts: </Strong>Avoid
            reusing passwords across multiple accounts.
          </li>
        </UL>
      </DocsCard>
      <DocsCard>
        <H2>Conclusion</H2>
        <P>
          SecurePass is designed to make password management easy and secure. By
          following this guide, you can take full advantage of all the features
          SecurePass offers to keep your online accounts safe. For any
          assistance or further information, visit our help section on the
          SecurePass website.
        </P>
      </DocsCard>
    </section>
  );
};

export default Docs;
