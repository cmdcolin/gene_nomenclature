#!/usr/bin/env python

from __future__ import print_function

from intermine.webservice import Service
service = Service("http://production-intermine-app.alliancegenome.org:8080/alliancemine/service")

query = service.new_query("Gene")

query.add_view("primaryIdentifier", "symbol", "name")

query.add_sort_order("Gene.symbol", "ASC")

query.add_constraint("organism.shortName", "=", "S. cerevisiae S288C", code="A")

for row in query.rows():
    print(row["primaryIdentifier"], row["symbol"], row["name"])
