<html>
	<head>
		<title>Data load results</title>
		<style>
		td {border: solid 1px #ddd;border-style: solid none;padding: 10px;}td:first-child {border-left-style: solid;border-top-left-radius: 4px; border-bottom-left-radius: 4px}td:last-child {border-right-style: solid;border-bottom-right-radius: 4px; border-top-right-radius: 4px;}</style>
	<head>
	<body style="font-family:sans-serif;">
		<div style="margin: 0 auto;width:900px;">
			<header>
				<div style="margin:15px 10px 20px 10px; border-bottom:1px solid #ddd; padding:10px;">
				<span style="color: #007683;font-weight:bold;font-size:32px;">FusionCharts</span>
				<span style="font-size:11px;color:#666;padding-left:4px;">
				Data load Methods Testing Results</span</div>
			</header>
			<div style="">
				<div style="margin:0px 10px; padding-bottom: 10px; border-bottom:1px solid #999;font-size:16px;font-weight:bold;color:#666;">All Test Results</div>
				<div style="margin:5px;">
					<div style="display:inline-block; float:left; margin:5px ;">
						<span style="font-size:12px;color:#666;line-height:20px;">Total Tests </span>
						<br/>
						<span  style="font-weight:bold;font-size:30px;"><%= total %></span>
					</div>
					<div style="display:inline-block; float:left; margin:5px 5px 5px 30px;">
						<span style="font-size:12px;color:#666;line-height:20px;">Passing </span>
						<br/>
						<span style="font-weight:bold;font-size:30px;color:#7cc576;"><%= passing %></span>
					</div>
					<div style="display:inline-block; float:left; margin:5px 5px 5px 30px;">
						<span style="font-size:12px;color:#666;line-height:20px;">Failing </span>
						<br/>
						<span style="font-weight:bold;font-size:30px;color:#c57676;"><%= failing %></span>
					</div>
				</div>
					<table style="clear:both;margin:30px 10px 10px 10px; width:98%;border-collapse: separate; border-spacing: 0 5px;">
					<% for (var key in details) { %>
					    <tr>
							<td>
								<span  style="font-weight:bold;padding:5px;"><%= key %></span>
							</td>
							<td>
								<span style="font-weight:bold;padding:5px;"><%= details[key] %></span>
							</td>
						</tr>
					 <% } %>
				</table>
			</div>
		</div>
	</body>
</html>
