import { Component } from '@angular/core';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
	services = [
		{
			title: 'Fronted Development',
			description:
				'🎨 Transforming digital dreams into front-end realities. With a focus on Angular, React, and pixel-perfect precision, Im your dedicated front-end architect. Lets create visually stunning and user-centric web experiences that captivate and engage. 💻✨ ',
			icon: 'bi-code-square',
			skills: ['html', 'css', 'javascript', 'Angular', 'React'],
		},

		{
			title: 'Backend Development',
			description:
				'🌐 Mastering the digital infrastructure, I specialize in crafting robust backend solutions. From data handling to server-side magic, I ensure your web applications have a strong backbone. Lets fortify your digital presence with seamless and reliable backend expertise. 💻🚀',
			icon: 'bi-file-earmark-code',
			skills: ['PHP', 'NodeJs', 'Express js', 'Mongodb', 'Mysql'],
		},

		{
			title: 'UI UX DESIGNING',
			description:
				'🎨 Designing user experiences that transcend screens. With a passion for both web and mobile, Im the creative force behind captivating UI/UX. Lets shape user-centric interfaces that bridge the digital gap, making every interaction seamless and delightful. 📱💻✨ ',
			icon: 'bi-display',
			skills: ['Figma', 'Adobe XD', 'Ai'],
		},
	];

	// Array of specific colors
	colors = ['#ffeada', '#FAFBCD', '#C2CCF9'];

	getBackgroundColor(index: any) {
		return this.colors[index % this.colors.length];
	}

	makeWordsBold(description: string): string {
		// Define the words you want to make bold
		const wordsToBold = [
			'Angular',
			'React',
			'pixel-perfect',
			'backend',
			'server-side',
			' data handling',
			'interfaces',
			'UI/UX',
		];

		// Use regular expressions to replace the target words with bold HTML tags
		wordsToBold.forEach((word) => {
			const regex = new RegExp(word, 'gi');
			description = description.replace(regex, `<b>${word}</b>`);
		});

		return description;
	}
}
