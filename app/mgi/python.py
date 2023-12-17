


from intermine.webservice import Service
service = Service("https://www.mousemine.org/mousemine/service")
query = service.new_query("Allele")
query.add_view("symbol", "name", "primaryIdentifier", "alleleType", "attributeString")
query.add_constraint("organism.species", "=", "musculus/domesticus", code = "A")

for row in query.rows():
    print row["symbol"], row["name"], row["primaryIdentifier"], row["alleleType"], \
        row["attributeString"]

