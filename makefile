all:
	gsutil rsync -rd public gs://www.jpvd.xyz
	gsutil setmeta -h "Content-Type:application/javascript" \\
	  -h "Cache-Control: public, max-age=14400, no-transform" gs://www.jpvd.xyz/js/*.js
	gsutil setmeta -h "Content-Type:text/css" \\
	  -h "Cache-Control: public, max-age=14400, no-transform" gs://www.jpvd.xyz/css/*.css
	