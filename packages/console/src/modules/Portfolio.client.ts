import ApexCharts from 'apexcharts';
import performanceData from '../../resources/api/portfolio/buyer_id/performance.json';

const getChartColors = () => {
	if (document.documentElement.classList.contains('dark')) {
		return {
			borderColor: '#374151',
			labelColor: '#9CA3AF',
		};
	} else {
		return {
			borderColor: '#F3F4F6',
			labelColor: '#6B7280',
		};
	}
};

// Capital Growth Chart (Area Chart)
const getCapitalGrowthChartOptions = () => {
	const chartColors = getChartColors();
	const capitalData = performanceData.charts.capital_over_time;

	const series = capitalData.metrics.datasets.map(dataset => ({
		name: dataset.label,
		data: dataset.data,
		color: dataset.color,
	}));

	return {
		chart: {
			height: 350,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: chartColors.labelColor,
			toolbar: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				enabled: true,
				opacityFrom: 0.45,
				opacityTo: 0,
			},
		},
		stroke: {
			width: 3,
			curve: 'smooth'
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
			y: {
				formatter(value: number) {
					return `RM ${value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
				},
			},
		},
		grid: {
			show: true,
			borderColor: chartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		series: series,
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3,
			},
		},
		xaxis: {
			categories: capitalData.metrics.labels,
			labels: {
				style: {
					colors: [chartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
			},
			axisBorder: {
				color: chartColors.borderColor,
			},
			axisTicks: {
				color: chartColors.borderColor,
			},
		},
		yaxis: {
			title: {
				text: capitalData.yAxis_label,
				style: {
					color: chartColors.labelColor,
				},
			},
			labels: {
				style: {
					colors: [chartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter(value: number) {
					return `RM ${value.toLocaleString('en-MY')}`;
				},
			},
		},
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [chartColors.labelColor],
			},
			itemMargin: {
				horizontal: 10,
			},
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false,
						},
					},
				},
			},
		],
	};
};

// Profit & ROI Trend Chart (Combo Chart - Bar + Line)
const getProfitTrendChartOptions = () => {
	const chartColors = getChartColors();
	const profitData = performanceData.charts.profit_trend;

	const series = profitData.metrics.datasets.map(dataset => ({
		name: dataset.label,
		type: dataset.type,
		data: dataset.data,
		color: dataset.color,
	}));

	return {
		chart: {
			height: 350,
			type: 'line',
			fontFamily: 'Inter, sans-serif',
			foreColor: chartColors.labelColor,
			toolbar: {
				show: false,
			},
		},
		stroke: {
			width: [0, 3],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '50%',
			},
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
			y: [
				{
					formatter(value: number) {
						return `RM ${value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
					},
				},
				{
					formatter(value: number) {
						return `${value.toFixed(1)}%`;
					},
				},
			],
		},
		grid: {
			show: true,
			borderColor: chartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		series: series,
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3,
			},
		},
		xaxis: {
			categories: profitData.metrics.labels,
			labels: {
				style: {
					colors: [chartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
			},
			axisBorder: {
				color: chartColors.borderColor,
			},
			axisTicks: {
				color: chartColors.borderColor,
			},
		},
		yaxis: [
			{
				title: {
					text: profitData.yAxis_left,
					style: {
						color: chartColors.labelColor,
					},
				},
				labels: {
					style: {
						colors: [chartColors.labelColor],
						fontSize: '14px',
						fontWeight: 500,
					},
					formatter(value: number) {
						return `RM ${value.toLocaleString('en-MY')}`;
					},
				},
			},
			{
				opposite: true,
				title: {
					text: profitData.yAxis_right,
					style: {
						color: chartColors.labelColor,
					},
				},
				labels: {
					style: {
						colors: [chartColors.labelColor],
						fontSize: '14px',
						fontWeight: 500,
					},
					formatter(value: number) {
						return `${value.toFixed(1)}%`;
					},
				},
			},
		],
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [chartColors.labelColor],
			},
			itemMargin: {
				horizontal: 10,
			},
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false,
						},
					},
				},
			},
		],
	};
};

// Initialize charts
let capitalChart: ApexCharts | null = null;
let profitChart: ApexCharts | null = null;

if (document.getElementById('capital-growth-chart')) {
	capitalChart = new ApexCharts(
		document.getElementById('capital-growth-chart'),
		getCapitalGrowthChartOptions()
	);
	capitalChart.render();
}

if (document.getElementById('profit-trend-chart')) {
	profitChart = new ApexCharts(
		document.getElementById('profit-trend-chart'),
		getProfitTrendChartOptions()
	);
	profitChart.render();
}

// Update charts on dark mode toggle
document.addEventListener('dark-mode', () => {
	if (capitalChart) {
		capitalChart.updateOptions(getCapitalGrowthChartOptions());
	}
	if (profitChart) {
		profitChart.updateOptions(getProfitTrendChartOptions());
	}
});

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		const targetId = button.getAttribute('data-tabs-target');

		// Remove active class from all buttons and contents
		tabButtons.forEach(btn => {
			btn.classList.remove('active');
			btn.setAttribute('aria-selected', 'false');
		});
		tabContents.forEach(content => {
			content.classList.remove('active');
			content.classList.add('hidden');
		});

		// Add active class to clicked button and target content
		button.classList.add('active');
		button.setAttribute('aria-selected', 'true');

		if (targetId) {
			const targetContent = document.querySelector(targetId);
			if (targetContent) {
				targetContent.classList.remove('hidden');
				targetContent.classList.add('active');
			}
		}
	});
});
