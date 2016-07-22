all:
	hugo
	gsutil rsync -rd public gs://www.jpvd.xyz
	gsutil -m setmeta -h "Content-Type:application/javascript" -h "Cache-Control: public, max-age=14400, no-transform" gs://www.jpvd.xyz/js/*.js
	gsutil -m setmeta -h "Content-Type:text/css" -h "Cache-Control: public, max-age=14400, no-transform" gs://www.jpvd.xyz/css/*.css
	