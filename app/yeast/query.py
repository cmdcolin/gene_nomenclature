#!/usr/bin/env python

from __future__ import print_function

from intermine.webservice import Service
service = Service("http://production-intermine-app.alliancegenome.org:8080/alliancemine/service")

query = service.new_query("Gene")

query.add_view("symbol", "name")

query.add_constraint("organism.shortName", "=", "S. cerevisiae S288C", code="A")

for row in query.rows():
    print(row["symbol"], row["name"])
