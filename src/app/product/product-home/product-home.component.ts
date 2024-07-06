import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
})
export class ProductHomeComponent implements OnInit {
  products: any;
  atendimentoData: any;

  // Configurações do gráfico de pizza
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  public pieChartType: ChartType = 'pie';

  // Dados para os gráficos
  public statusChartData: ChartData<'pie'> = {
    labels: ['Abertos', 'Solucionados'],
    datasets: [{ data: [] }],
  };

  public tipoServicoChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [{ data: [] }],
  };

  public origemAtendimentoChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [{ data: [] }],
  };

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadAtendimentoData();
  }

  loadAtendimentoData() {
    this.productService.getAtendimentoTotal().subscribe(
      (data: any) => {
        this.atendimentoData = data;
        this.updateChartData(); // Chame o método aqui
      },
      (error) => {
        console.error('Erro ao carregar dados de atendimento:', error);
      },
    );
  }

  updateChartData() {
    // Atualiza o gráfico de status
    this.statusChartData.datasets[0].data = [
      this.atendimentoData.totalAbertos,
      this.atendimentoData.totalSolucionados,
    ];

    // Atualiza o gráfico de tipo de serviço
    this.tipoServicoChartData.labels = Object.keys(
      this.atendimentoData.totalPorTipoServico,
    );
    this.tipoServicoChartData.datasets[0].data = Object.values(
      this.atendimentoData.totalPorTipoServico,
    );

    // Atualiza o gráfico de origem de atendimento
    this.origemAtendimentoChartData.labels = Object.keys(
      this.atendimentoData.totalPorOrigemAtendimento,
    );
    this.origemAtendimentoChartData.datasets[0].data = Object.values(
      this.atendimentoData.totalPorOrigemAtendimento,
    );
  }

  logout() {
    // Limpa o token armazenado
    window.localStorage.removeItem('token');
    // Redireciona para a tela de login
    this.router.navigate(['/auth/login']);
  }
}
