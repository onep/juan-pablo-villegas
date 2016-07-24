sync:
	gsutil -m rsync -rd public gs://www.jpvd.xyz
	gsutil -m setmeta -h "Content-Type:application/javascript" -h "Cache-Control: public, max-age=604800, no-transform" gs://www.jpvd.xyz/js/*.js
	gsutil -m setmeta -h "Content-Type:text/css" -h "Cache-Control: public, max-age=604800, no-transform" gs://www.jpvd.xyz/css/*.css
	gsutil -m setmeta -R -h "Cache-Control: public, max-age=604800, no-transform" gs://www.jpvd.xyz/img/
deep:
	gulp deep
	hugo
all:
	hugo
	@$(MAKE) sync