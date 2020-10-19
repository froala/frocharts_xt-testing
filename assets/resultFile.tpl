<html>
	<head>
		<title>xt-testing results</title>
		<style>
		td {border: solid 1px #ddd;border-style: solid none;padding: 10px;}td:first-child {border-left-style: solid;border-top-left-radius: 4px; border-bottom-left-radius: 4px}td:last-child {border-right-style: solid;border-bottom-right-radius: 4px; border-top-right-radius: 4px;}</style>
	<head>
	<body style="font-family:sans-serif;">
		<div style="margin: 0 auto;width:900px;">
			<header>
				<div style="margin:15px 10px 20px 10px; border-bottom:1px solid #ddd; padding:10px;">
				<span><a href="#" style="color:#007683; font-weight:bold; font-size:32px; text-decoration:none;">FusionCharts</a></span>
				<span style="font-size:11px;color:#666;padding-left:4px;">Visual Comparison Testing Results</span>
			</header>
			<div style="">
				<div style="margin:0px 10px; padding-bottom: 10px; border-bottom:1px solid #999;font-size:16px;font-weight:bold;color:#666;">All Test Results</div>
					<table style="clear:both;margin:30px 10px 10px 10px; width:98%;border-collapse: separate; border-spacing: 0 5px;">
						{{for details}}
						<tr>
							<td>
								<a href="{{resultFile}}">{{name}}</a>
							</td>
							<td>
								<span style="font-size:14px;color:#666;">Total Tests</span>
								<br/>
								<span style="font-weight:bold;padding:5px;">{{total}}</span>
							</td>
							<td>
								<span style="font-size:14px;color:#666;">Passing</span>
								<br/>
								<span  style="font-weight:bold;color:#7cc576;padding:5px;">{{passing}}</span>
							</td>
							<td>
								<span style="font-size:14px;color:#666;">Failing</span>
								<br/>
								<span style="font-weight:bold;color:#c57676;padding:5px;">{{failing}}</span>
							</td>
						</tr>
						{{for}}
				</table>
			</div>
		</div>
	</body>
</html>
