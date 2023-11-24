import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModulesService } from 'src/app/services/modules.service';
import { NgxIzitoastService } from 'ngx-izitoast';

@Component({
	selector: 'app-module-articles',
	templateUrl: './module-articles.component.html',
	styleUrls: ['./module-articles.component.css'],
})
export class ModuleArticlesComponent implements OnInit {
	articles: any[] = [];
	id: any;

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

	constructor(
		private module: ModulesService,
		private route: ActivatedRoute,
		private toastr: NgxIzitoastService,
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params['id'];
			this.getArticles();
		});
	}

	//* GET MODULE RELATED ARTICLES
	getArticles() {
		this.module.getModuleArtilces(this.id).subscribe((data) => {
			this.articles = data.data.articles;
			this.dtTrigger.next(event);
		});
	}

	// * REMOVE ARTICLE FROM MODULE
	remvoveArticle(article: any) {
		this.module
			.removeArticleFromModule(this.id, article._id)
			.subscribe((data) => {
				this.articles = this.articles.filter(
					(art: any) => art._id !== article._id,
				);
				this.toastr.success({ message: data.status });
			});
	}
}
